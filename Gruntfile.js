module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cfg: grunt.file.readJSON('.couchapprc'),

		connect: {
			server: {
				options: {
					port: 9090,
					base: 'src/_attachments',
					hostname: '*',
					livereload: 38949,
					open: 'http://127.0.0.1:9090'
				}
			 }
		},
		watch: {
			all: {
				files: 'src/_attachments/**/*',
				options: {
					livereload: '<%= connect.server.options.livereload %>'
				}
			}
		},
		'couch-compile': {
			website: {
				files: {
					'build/website.json': 'src'
				}
			}
		},
		'couch-push': {
			options: {
			  user: "<%= cfg.cloudant.username %>",
			  pass: "<%= cfg.cloudant.password %>",
			},
			cloudant: {
				files: {
					'<%= cfg.cloudant.url %>/<%= cfg.cloudant.couch %>': 'build/website.json'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-couch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('compile', ['couch-compile']);
	grunt.registerTask('deploy', ['couch-compile', 'couch-push']);

};