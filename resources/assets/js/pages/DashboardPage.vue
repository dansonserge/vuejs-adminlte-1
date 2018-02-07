<script>

import {mapState} from 'vuex';
import {getHeader} from '../config.js';
import Vue from 'vue'
import Chart from '../chart.min'

export default{
  computed:{
      
         ...mapState({
              userStore: state => state.userStore,
              
         })

    },
   watch:{
      modalIsOpen: function () {
      this.modalIsOpen= this.modalIsOpen
    }
  },
data:function(){
     return{
      actAddbtn:true,
      addActivityDiv:false,
     }
    
  },

  mounted: function(){

    

    

    this.allowChart()
    
  

  },
methods:{
  
     toggleActivityBlock:function(){
      if(this.activityAddbtn==true){

         this.activityAddbtn=false
         this.addActivityDiv=true
         
      }else{
        this.activityAddbtn=true

        this.addActivityDiv=false
         

      }
     },

    allowChart:function(){

       if(this.addAssociationDiv==true || this.addCorporateDiv==true){
        return true;
       }else{
       this.startPie(this.$refs.areachart,'pie');   
       }

},


startPie:function(canvas,type){

 
        var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    
    // This will get the first returned node in the jQuery collection.
    var areaChart = new Chart(areaChartCanvas);

    var areaChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Farmers",
          fillColor: "rgba(210, 214, 222, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Parterners",
          fillColor: "rgba(60,141,188,0.9)",
          strokeColor: "rgba(60,141,188,0.8)",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        },

      ]
    };

    var areaChartOptions = {
      //Boolean - If we should show the scale at all
      showScale: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - Whether the line is curved between points
      bezierCurve: true,
      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.3,
      //Boolean - Whether to show a dot for each point
      pointDot: false,
      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      //Boolean - Whether to fill the dataset with a color
      datasetFill: true,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true
    };

//Create the line chart
    areaChart.Line(areaChartData, areaChartOptions);

  
   },
    
   

  }
}

</script>
<template>
<div class="wrapper">

<top-nav></top-nav>
<side-bar></side-bar>

 <div class="content-wrapper">
<!--  <notification></notification> -->

<!-- Content Header (Page header) -->
    
<!-- Content Header (Page header) -->

<section class="content col-md-12">

  
    
</section>

<div>
  <section class="content-header">
      <h1>Home</h1>
  </section>
<upper-dashboard-items>
</upper-dashboard-items>
       <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
           <!-- AREA CHART -->
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Area Chart farmer</h3>
                  <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
            </div>
            <div class="box-body">
              <div class="chart">
                <canvas id="areaChart" ref="areachart" style="height:250px"></canvas>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
          <!-- /.box -->
        </div> 

       <!-- /.col (RIGHT) -->
          </div>
          <!-- /.row -->  
     </section>
</div>
    
    <!-- /.content -->
  </div>
  

<control-menu>
  
</control-menu>
</div>
  </template>
<style>
  .content{
    min-height:0;
   padding-bottom: 
  }
</style>