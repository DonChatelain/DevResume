$(function() {

	var repos;
	var outhtml;
	var username = "DonChatelain";
	var requestURI = 'https://api.github.com/users/' + username;
	var repoURI  = 'https://api.github.com/users/' + username + '/repos';

	requestJSON(requestURI, function(json) {
		if(json.message == "Not Found" || username == '') {
        	$('#gh-data').html("<h2>No User Info Found</h2>");
      	} else {
        // else we have a user and we display their info
	        var fullname   = json.name;
	        var username   = json.login;
	        var aviurl     = json.avatar_url;
	        var profileurl = json.html_url;
	        var location   = json.location;
	        var followersnum = json.followers;
	        var followingnum = json.following;
	        var reposnum     = json.public_repos;
        
        	if(fullname == undefined) { 
        		fullname = username; 
        	}

	        outhtml = '<h2><span class="smallname">@<a href="'+profileurl+'" target="_blank">'+username+'</a></span></h2>';
	        outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"></a></div>';
	        outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos: '+reposnum+'</p></div>';
	        outhtml = outhtml + '<div class="repolist clearfix">';

	        $.getJSON(repoURI, function(json) {
	        	repos = json;
	        	outputPageContent();
	        });


    	}
	});


	function requestJSON(url, callback) {
		$.ajax({
			url: url,
			complete: function(xhr) {
				callback.call(null, xhr.responseJSON);
			}
		});
	}

	function outputPageContent() {
		if (repos.length == 0) {
			outhtml = outhtml + '<p>No repos!</p></div>';
		} else {
			outhtml = outhtml + '<p>Repo List: </p> <ul>';
			$.each(repos, function(index) {
				outhtml = outhtml + '<li><a href="'+repos[index].html_url+'" target="_blank">'+repos[index].name + '</a></li>';
			});
			outhtml = outhtml + '</ul></div>';
		}
		$('#gh-data').html(outhtml);
	}

});