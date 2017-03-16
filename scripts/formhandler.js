(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement === 0) {
            throw new Error('Could not find element with selector:' + selector);
        }
    }


    //
    // FormHandler.prototype.addSubmit = function () {
    //     this.$formElement.on('submit', function(event) {
    //         $('#exampleAchievement').on('show.bs.modal', function (event) {
    //             var button = $(event.relatedTarget);
    //             var recipient = button.data('whatever');
    //             var modal = $(this);
    //             modal.find('.modal-title').text('New message to' + recipient);
    //             modal.find('.modal-body input').val(recipient);
    //         });
    //     });
    // };

    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {

            event.preventDefault();

            var data = {};
            console.log(data);
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            //console.log(this, 'Hello');
            console.log(this);
            fn(data);

            //if(data. === "Coffe-zilla" && data[item.flavor] != "")


            this.reset();
            this.elements[0].focus();
        });
    };


    FormHandler.prototype.slider = function () {
        //var color = {};
        var level = $('#strengthLevel');
        var value = $('#strengthValue');

        this.$formElement.on('change', function() {
            $(value).html( $(level).val());

            if ($(level).val() <= 33) {
                //color = 'green';
                $(value).css('color', 'green');
            }
            else if ($(level).val() > 34 && $(level).val() <= 66 ) {
                //color = 'yellow';
                $(value).css('color', 'yellow');
            }
            else if ($(level).val() > 67) {
                //color = 'red';
                $(value).css('color', 'red');
            }

        });


    };





















    App.FormHandler = FormHandler;
    window.App = App;

})(window);









      //Create a handler for the slider's change event
      // function sliderChange () {
      //     // this.$formElement.on('change', function(event) {
      //     //     event.preventDefault();
      //     this.elements[7].on ('drag', function(event) {
      //         event.preventDefault();
      //         console.log('What a interesting coffee');
      //     });
      // }







/*Create a handler for the slider's change event
function sliderChange () {
    this.$formElement.on('change', function(event) {
        event.preventDefault();

        this.elements[7].on ('drag', function(event) {
          event.preventDefault();
          console.log('What a interesting coffee')

      } )

    });

    //Select slider based on name property
    $("#strengthLevel")

}
*/
