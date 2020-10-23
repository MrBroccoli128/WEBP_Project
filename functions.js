var button = document.getElementById('mybutton');
var i = 0;

    button.addEventListener('mouseover', function() {
        i++;
        button.textContent = i;
    });



let counter = {
    count: 0,
    up: function up(){
        this.count++;
    },
    reset: function reset(){
        this.count = 0;
    }
};
