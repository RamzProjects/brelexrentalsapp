
var thumbnailSpacing = 15;


$(function() {	

	/* ACTIVATE PRODUCTS LINKS */
		
	$('a.sortLink').on('click',function(e){
		e.preventDefault;
		$('a.sortLink').removeClass('selected');
		$(this).addClass('selected');
		var keyword = $(this).attr('data-keyword');
		sortThumbnails(keyword);
	});

	/* SORTABLE PRODUCTS GALLERY */
	
	$('.gallery .sorting').css('margin-bottom', window.thumbnailSpacing + 'px');
	$('.thumbnail_container a.fotito').addClass('showMe').addClass('colorbox').attr('rel','gal');
	
	positionThumbnails();
		
}); /* jQuery is loaded */


/* SORT THUMBS BASED ON KEYWORDS */

function sortThumbnails(keyword){
	$('.thumbnail_container a.fotito').each(function(){ 
		
		var thumbnailKeywords = $(this).attr('data-keywords');
		
		if(keyword == 'all'){
			$(this).addClass('showMe').removeClass('hideMe').attr('rel','gal');
		}else{
			if( thumbnailKeywords.indexOf(keyword) != -1 ){
				$(this).addClass('showMe').removeClass('hideMe').attr('rel','gal');
			}else{
				$(this).addClass('hideMe').removeClass('showMe').attr('rel','nofollow');				
			}
		}
	});	
	
	positionThumbnails();	
}


/* SORTABLE PRODUCTS GALLERY FUNCTIONS */

function positionThumbnails(){
	
	/* degub */ $('.debug-remainder').html('');
	
	$('.thumbnail_container a.fotito.hideMe').animate({opacity:0},500,function(){ 
		$(this).css({'display':'none','top':'0px','left':'0px'});
	});
	
	
	var containerWidth = $('.photos').width();
	var thumbnail_R = 0;
	var thumbnail_C = 0;
	var thumbnailWidth = $('a.fotito img:first-child').outerWidth() + window.thumbnailSpacing;
	var thumbnailHeight = $('a.fotito img:first-child').outerHeight() + window.thumbnailSpacing;
	var max_C = Math.floor(containerWidth / thumbnailWidth);
	
	$('.thumbnail_container a.fotito.showMe').each(function(index){
		
		var remainder = (index%max_C)/100;
		var maxIndex = 0;
		/* debug */ $('.debug-remainder').append(remainder+' - ');
		
		if(remainder == 0){
			if(index != 0){
				thumbnail_R += thumbnailHeight;
			}
			thumbnail_C = 0;
		}else{
			thumbnail_C += thumbnailWidth;
		}
		
		$(this).css('display','inline-block').animate({
			'opacity' : 1,
			'top' : thumbnail_R + 'px',
			'left' : thumbnail_C + 'px'
		},500);
		
		var newWidth = max_C * thumbnailWidth ;
		var newHeight = thumbnail_R + thumbnailHeight;
		//alert(newWidth + '-' + newHeight);
		$('.thumbnail_container').css({'width':newWidth+'px','height':newHeight+'px'});
		
	});

detectColorboxLinks();

}


function detectColorboxLinks(){
	
	$('a.colorbox').colorbox({
		'transition' : 'elastic',
		'speed' : 500,
		'opacity' : .75		
	});
	
	
}






