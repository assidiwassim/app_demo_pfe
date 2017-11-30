FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('Layout', { main: "Home" });
    }
});


FlowRouter.route('/about', {
    action: function() {
        BlazeLayout.render('Layout', { main: "About" });
    }
});


FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render('Layout', { main: "Login" });
    }
});