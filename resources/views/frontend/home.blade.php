@extends('layout.default')

@section('content')
<script src="/js/daypilot/daypilot-all.min.js" type="text/javascript"></script>
<div id="layouts" data-bind="loading: loading">
	<div class="loader" style="display: none;">
		<div class="progress"></div>
	</div>

	<div data-bind="with: currentPage">
		<div data-bind="template: {name: &#39;layout-&#39;+layout+&#39;-tpl&#39;, data: view.viewModel, afterRender: view.pageAfterRender}">
			<div class="toolbar no-padding">
				<div id="cal-tools">
					<a id="calendar-create-event" class="btn btn-blue action-btn" data-bind="click: createEventClicked">Create appointment</a>

					<div id="month-cal">
						<div class="datepicker week" id="datepicker">
						
							


						</div>
					</div>
				</div>
				<div id="filters" class="scrollable visible">
					<div class="scrollbar disable" style="height: 581px;">
						<div class="track" style="height: 581px;">
							<div class="thumb" style="top: 0px; height: 579px;">
								<div class="end"></div>
							</div>
						</div>
					</div>
					<div class="viewport" style="height: 581px;">
						<div class="overview" style="top: 0px;">
							<div id="filter-scroll" class="scroll" data-bind="template: {name: &#39;resources-services-tpl&#39;}">
								<ul class="nav">
									<li class="nav-header">
										Staff <a href="https://localhost/#/business/resources" class="hidden" data-bind="click: resourceEditClicked">Edit</a>
									</li>

									<li>
										<a href="https://localhost/#" class="resource-filter selected" data-bind="click: function(i, e) {resourceClicked(0, e)}, selected: selectedResourceId() == 0"><i class="icon icon-person"></i> All staff</a>
									</li>

									<!-- ko foreach: $root.data.resources -->
									<li>
										<a href="https://localhost/#" class="resource-filter" data-bind="click: $parent.resourceClicked, selected: $parent.selectedResourceId() == data.id()"> <i class="icon icon-person"></i> <span data-bind="text: data.name">Hans C</span> <span class="filter-dropdown-btn icon icon-arrow-down"></span> </a>
									</li>
									<!-- /ko -->

									<li>
										<a href="https://localhost/#" class="resource-filter" data-bind="click: function(i, e) {resourceClicked(-1, e)}, selected: selectedResourceId() == -1"><i class="icon icon-person"></i> Not assigned</a>
									</li>

									<li class="nav-header">
										Services <a href="https://localhost/#/business/services" class="hidden" data-bind="click: serviceEditClicked">Edit</a>
									</li>

									<li>
										<a href="https://localhost/#" class="service-filter selected" data-bind="click: function(i, e) {serviceClicked(0, e)}, selected: selectedServiceId() == 0"> <i class="icon icon-service"></i> All services </a>
									</li>
									<!-- ko foreach: $root.data.services -->
									<li>
										<a href="https://localhost/#" class="service-filter" data-bind="click: $parent.serviceClicked, selected: $parent.selectedServiceId() == data.id()"><i class="icon icon-service"></i> <span data-bind="text: data.name">Service</span> <span class="filter-dropdown-btn icon icon-arrow-down"></span> </a>
									</li>
									<!-- /ko -->
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="upcoming-indicator" data-bind="with: $root.acl.bookings">
					<h3>Bookings per month</h3>
					<p>
						<span data-bind="text: count">1</span>
					</p>
				</div>
			</div>

			<div class="canvas noscroll">
				<div id="canvas-scroll" class="scroll">
					<!-- ko with: notifications -->
					<div id="calendar-notifications" class="calendar-notifications" data-bind="fadeVisible: shown" style="display: none;">
						<div class="calendar-notification" data-bind="style: { right: requests().length &lt;= 1 ? &#39;-1px&#39; : &#39;&#39;}" style="right: -1px;">
							<div class="calendar-notification-item" style="position: absolute;left:0;right:0;top:0;bottom:0;" data-bind="template: {name: &#39;request-tpl&#39;, data: selectedRequest(), &#39;if&#39;: selectedRequest()}"></div>
						</div>

						<div class="buttons" data-bind="visible: requests().length &gt; 1" style="display: none;">
							<a href="https://localhost/#" data-bind="click: prevClicked"><i class="icon icon-arrow-up"></i></a>
							<a href="https://localhost/#" data-bind="click: nextClicked"><i class="icon icon-arrow-down"></i></a>
						</div>
					</div>
					<!-- /ko -->
					<div class="paper" data-bind="style: {top: notifications.requests().length == 0 ? &#39;0px&#39; : &#39;56px&#39;}" style="top: 0px;">
						<div id="calendar">
							<div class="calendar-header" style="">
								<h1 data-bind="html: calendarTitle">March 13 - 19 <small>2017</small></h1>

								<div class="btn-group controls">
									<a href="https://localhost/#" class="btn btn-grey prev" data-bind="click: prevClicked"><i class="icon icon-arrow-left"></i></a><a href="https://localhost/#" class="btn btn-grey today" data-bind="click: todayClicked">Today</a><a href="https://localhost/#" class="btn btn-grey next" data-bind="click: nextClicked"><i class="icon icon-arrow-right"></i></a>

									<span style="position: relative; margin-left: 10px;"> <a href="https://localhost/#" class="btn btn-grey calendar-settings-button dropdown" data-bind="click: toggleSettings"><i class="icon icon-settings"></i></a>
										<ul id="calendar-settings" class="btn-drop right" style="display: none">
											<li>
												<a href="https://localhost/#/synchronization" data-bind="click: syncClicked">Sync calendar</a>
											</li>
											<li>
												<a href="https://localhost/#" data-bind="click: printClicked">Print</a>
											</li>
											<li>
												<a href="https://localhost/#/business/settings">Settings</a>
											</li>
										</ul> </span>
								</div>

								<div class="btn-group controls-center view-select" data-bind="foreach: views">
									<a href="https://localhost/#" class="btn btn-grey" data-bind="css: {active: $parent.selectedView() == $data}, text: $parent.viewsLang[$index()], click: $parent.changeViewClicked">Agenda</a><a href="https://localhost/#" class="btn btn-grey" data-bind="css: {active: $parent.selectedView() == $data}, text: $parent.viewsLang[$index()], click: $parent.changeViewClicked">Day</a><a href="https://localhost/#" class="btn btn-grey active" data-bind="css: {active: $parent.selectedView() == $data}, text: $parent.viewsLang[$index()], click: $parent.changeViewClicked">Week</a>
								</div>
							</div>
							<div class="" id="dp">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	var nav = new DayPilot.Navigator("datepicker");
        nav.showMonths = 1;
        nav.skipMonths = 1;
        nav.selectMode = "week";
        nav.onTimeRangeSelected = function(args) {
            dp.startDate = args.day;
            dp.update();
            loadEvents();
        };
        nav.init();
	var dp = new DayPilot.Calendar("dp");
    dp.viewType = "Week";
    dp.onEventMoved = function (args) {
                    $.post("backend_move.php", 
                            {
                                id: args.e.id(),
                                newStart: args.newStart.toString(),
                                newEnd: args.newEnd.toString()
                            }, 
                            function() {
                                console.log("Moved.");
                            });
                };

                dp.onEventResized = function (args) {
                    $.post("backend_resize.php", 
                            {
                                id: args.e.id(),
                                newStart: args.newStart.toString(),
                                newEnd: args.newEnd.toString()
                            }, 
                            function() {
                                console.log("Resized.");
                            });
                };

                // event creating
                dp.onTimeRangeSelected = function (args) {
//                    var name = prompt("New event name:", "Event");
//                    dp.clearSelection();
//                    if (!name) return;
//                    var e = new DayPilot.Event({
//                        start: args.start,
//                        end: args.end,
//                        id: DayPilot.guid(),
//                        resource: args.resource,
//                        text: name
//                    });
//                    dp.events.add(e);
//
//                    $.post("backend_create.php",
//                            {
//                                start: args.start.toString(),
//                                end: args.end.toString(),
//                                name: name
//                            },
//                            function() {
//                                console.log("Created.");
//                            });
                    var modal = new DayPilot.Modal();
                    modal.data = "my data";
                    modal.onClosed = function(args) {
                        dp.clearSelection();
                        var result = args.result;
                        if (result && result.status === "OK") {
                            loadEvents();
                            //dp.message(result.message);
                        }
                    };

                    modal.showUrl("/showModal?start=" + args.start + "&end=" + args.end + "&resource=" + args.resource);


                };


                dp.onEventClick = function(args) {
                    alert("clicked: " + args.e.id());

                };

                dp.init();
                //loadResources();
                loadEvents();

                function loadEvents() {
                    var start = dp.visibleStart();
                    var end = dp.visibleEnd();
                    console.log(start.toString());
                    console.log(end.toString());

                    $.post("/event/show",
                            {
                                start: start.toString(),
                                end: end.toString()
                            },
                            function(data) {
                                dp.events.list = data;
                                dp.update();
                            }
                    );
                }


</script>
@stop