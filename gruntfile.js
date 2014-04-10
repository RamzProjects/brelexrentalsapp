module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/bootstrap.js': ['_/components/js/jquery.js',
										'_/components/js/affix.js',
										'_/components/js/transition.js',
										'_/components/js/tooltip.js',
										'_/components/js/alert.js',
										'_/components/js/button.js',
										'_/components/js/carousel.js',
										'_/components/js/collapse.js',
										'_/components/js/dropdown.js',
										'_/components/js/modal.js',
										'_/components/js/popover.js',
										'_/components/js/scrollspy.js',
										'_/components/js/tab.js'],
					'_/js/imgpreload.js': ['_/components/js/jquery.imgpreload.js'],
					'_/js/bootstrap.js': ['_/components/js/jquery.js'],
					'_/js/myscript.js': ['_/components/js/_myscript.js'],
					'_/js/sortable_pgallery.js': ['_/components/js/_sortable_pgallery.js'],
					'_/js/ui_map.js': ['_/components/js/_ui_map.js'],
					'_/js/location_map.js': ['_/components/js/_location_map.js']
				} //files
			} //my_target
		}, //uglify
		less: {
			my_target1: {
				options: {
					cleancss: true
				}, // options
				files: {
					'_/css/bootstrap.css': ['_/components/less/bootstrap.less'],
					'_/css/mystyles.css': ['_/components/less/_mystyles.less'],
					'_/css/marquee.css': ['_/components/less/_marquee.less'],
					'_/css/sortable_pgallery.css': ['_/components/less/_sortable_pgallery.less']
				} //files
			} //my_target1
		}, //less
		watch: {
			uglify: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, //uglify
			less: {
				files: ['_/components/less/bootstrap.less','_/components/less/_marquee.less','_/components/less/_mystyles.less','_/components/less/_sortable_pgallery.less'],
				tasks: ['less']				
			} //less
		} //watch
	}) //initConfig
} //exports