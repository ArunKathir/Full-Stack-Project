const UserModel = require('../models/UserDataDBModel');

const showAllUser = (req, res) => {
    // res.send("Show all Users");
    try {
        UserModel.find({})
            .then(Users => {
                res.json(Users);
            });

        // UserModel.find({}, (Users) => {
        //     res.json(Users);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const showUser = (req, res) => {
    // res.send("Show User");
    try {
        UserModel.find({$or: [{"name": req.body.name}, {"age": req.body.age}, {"_id": req.body.id}]})
            .then(Users => {
                res.json(Users);
            });

        // UserModel.find({}, (Users) => {
        //     res.json(Users);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const addUser = async (req, res) => {
    // res.send("Add User - from Routes");

    const User = new UserModel(req.body);

    try {
        let Users = await UserModel.find({"username": req.body.username});
            
        if(Users.length > 0)
            res.json("User Already Exists!")
        else {
            await User.save();
            res.json("User Added Successfully!");
        }
    } catch (err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        res.json(errorList);
    }
};

const updateUser = (req, res) => {
    // res.send("Update User - from Routes");

    try {
        UserModel.updateOne({"_id": req.body._id}, {$set: req.body})
            .then(results => {
                if(results.modifiedCount > 0) {
                    res.json("User Updated Successfully!");
                } else {
                    res.json("Unable to update the User!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

const deleteUser = (req, res) => {
    // res.send("Delete User - from Routes");

    try {
        UserModel.deleteOne({"_id": req.body._id})
            .then(results => {
                if(results.deletedCount > 0) {
                    res.json("User Deleted Successfully!");
                } else {
                    res.json("Unable to delete the User!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

module.exports = {
    showAllUser,
    showUser,
    addUser,
    updateUser,
    deleteUser
}