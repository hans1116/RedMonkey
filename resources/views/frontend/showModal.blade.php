<head>
    <link href="/css/app.min.css?v=13032017" rel="stylesheet">
    <script src="/js/jquery-2.1.1.js"></script>
    <script src="/js/daypilot/daypilot-all.min.js" type="text/javascript"></script>
</head>
<body style="background: none;" class="timeformat-12-hours full">
<div class="popover right in" >

    <div class="popover-inner" style="overflow:visible;">
        <div data-bind="template: {'name': 'event-popover-tpl', afterRender: $root.afterRender}">
            <!-- ko with: $root.event -->
            {!! Form::open(array('name' => 'login_form', 'method' => 'post','id'=>'f')) !!}

            <div class="form-group">
                {!! Form::label('CLIENT', '', array('class' => 'form-label', 'for' => '')) !!}
                {!! Form::text('name', '', array('class' => 'form-text',  'required' => '', 'placeholder'=>'Name')) !!}
            </div>
            <div class="form-group">

                {!! Form::text('phone', '', array('class' => 'form-text','id'=>'phone', 'placeholder'=>'Phone')) !!}
                </div>
            <div class="form-group">
                {!! Form::text('email', '', array('class' => 'form-text','id'=>'email', 'placeholder'=>'Email')) !!}
            </div>
            <div class="form-group inline">
                <label for="frm-date-start">Date</label>
                <input id="start" name="start" type="text" placeholder="99/99/9999" class="span-date" data-bind='' autocomplete="off">
            </div>
            <div class="form-group inline">
                <label for="frm-time-start">Time <i data-bind="visible: $root.isColliding" class="icon icon-warning" style="display: none;" data-original-title=''></i></label>
                <div class="selectbox-input"><input id="end" name="end" type="text" placeholder="hh:mm" class="span-time selectbox-editable" data-bind='' autocomplete="off"><i class="icon icon-dropdown"></i></div>
            </div>
            <div class="form-group inline duration-group">
                <label for="frm-duration">Duration</label>
                <div class="selectbox-input"><input id="frm-duration" name="duration" class="span-duration selectbox-editable" type="text" placeholder="99:99" autocomplete="off" data-bind=''><i class="icon icon-dropdown"></i></div>
            </div>
            <p class="event-popover-links">
                <!-- ko if: bookings()[0].note.temp() == '' -->
                <a class="edit-note" href="#" data-bind="click: $root.editNote">Add note</a>
                <!-- /ko -->
                <!-- ko if: repeatType() == 0 -->
                <a class="edit-repeat" href="#" data-bind="click: $root.editRepeat">Add repeat</a>
                <!-- /ko -->
            </p>
            <div class="form-actions">
                {!! Form::submit("Save", ['class' => 'btn btn-blue submit']) !!}
                {{--<input type="submit" value="Save" class="btn btn-blue submit" data-loading-text="Saving">--}}
                <input type="button" class="btn btn-grey" data-bind="buttonClick: $root.cancelEvent" value="Cancel" onclick="javascript:close();">
                {{--<input type="button" class="btn btn-delete right" data-bind="buttonClick: $root.deleteEvent, visible: id > 0" value="Delete" style="display: none;">--}}
            </div>
            {{--<div class="form-group">--}}
                {{--{!! Form::submit("Login", ['class' => 'btn btn-all']) !!}--}}
            {{--</div>--}}

            {!! Form::close() !!}
        </div>
        <script type="text/javascript">
            function close(result) {
                console.log(result);
                DayPilot.Modal.close(result);
            }

            $("#f").submit(function (ev) {

                // make sure it's not submitted using the default mechanism
                ev.preventDefault();

                // normalize the date values
                $("#start").val(startPicker.date.toString());
                $("#end").val(endPicker.date.toString());

                // submit using AJAX
                var f = $("#f");
                $.post("/event/create", f.serialize(), function (result) {
                    close(eval(result));
                });

            });

            var startPicker =  new DayPilot.DatePicker({
                target: 'start',
                pattern: 'M/d/yyyy',
                date: "<?php echo $start ?>",
                onShow: function() {
                    parent.DayPilot.ModalStatic.stretch();
                }
            });

            var endPicker =  new DayPilot.DatePicker({
                target: 'end',
                pattern: 'M/d/yyyy',
                date: "<?php echo $end ?>",
                onShow: function() {
                    parent.DayPilot.ModalStatic.stretch();
                }
            });

            $(document).ready(function () {
                $("#name").focus();
            });

        </script>
    </div>
</div>
