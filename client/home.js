import { Meteor } from 'meteor/meteor';
Client = new Mongo.Collection("Client");






Template.Home.events({


    'submit form' (event) {


        event.preventDefault(); //par default

        var Nom = event.target.nom.value; // get value  from  input 'name'true
        // insertion a la base de donné 
        Client.insert({
            Name: Nom //true
        });
    },


    'click #delete' (event) {
        Client.remove(this._id);
    },

    'click #update' (event) {
        event.preventDefault();
        var Nom = $("#nom").val(); //get value 

        Client.update(this._id, {
            $set: { Name: Nom }
        });
    }

});



Template.Home.helpers({
    Client: function() {
        return Client.find();
    }

});