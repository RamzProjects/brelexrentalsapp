<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Brelex Rentals -- Location</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href="_/css/bootstrap.css" rel="stylesheet" media="screen">
    <link href="_/css/mystyles.css" rel="stylesheet" media="screen">
  </head>
  <body id="location">
		
		<header>
			<?php include "_/components/php/header.php"; ?>
		</header>


		<section class="container">
			<?php include "_/components/php/location-map.php"; ?>

			<div class="content row">
				<section class="main col col-lg-8">

				</section><!-- main -->
				<section class="main col col-lg-4">

				</section><!-- sidebar -->
			</div><!-- content -->
			<?php include "_/components/php/footer.php"; ?>
		</section><!-- container -->

	<script src="http://maps.google.com/maps/api/js?sensor=true" type="text/javascript"></script>
    <script src="_/js/bootstrap.js"></script>
    <!-- <script src="_/js/myscript.js"></script> -->
    <script src="_/js/ui_map.js"></script>
    <script src="_/js/location_map.js"></script>
  </body>
</html>