function update_feed(feed, id) {
	if (feed == undefined || !feed.items || feed.items.length == 0) 
		return;
		
	var item = feed.items[0];
	
	var a, oDate
	if (null != (a = item.updated.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z/)))
		oDate = Date.UTC(a[1], a[2]-1, a[3], a[4], a[5], a[6], 0);
	else
		oDate = new Date(item.updated);
		
	var sdate = relativeDate(oDate, new Date());
	var sid = item.id.substr(0, 7);
		
	$("#last_updates + ul li:eq("+id+") em").replaceWith(sdate+" <em>by</em> "+item.author+" - <em><a href='"+item.link+"'>"+sid+"</a><br/>&#8220;"+item.title+"&#8221;</em>");
}

$(document).ready(function() {
    $.getFeed({
		url: '/get_rss.php?url=http://git.xcsoar.org/cgit/master/xcsoar.git/atom/?h=master',
		success: function(feed) { update_feed(feed, 0); }
	});
    $.getFeed({
		url: '/get_rss.php?url=http://git.xcsoar.org/cgit/master/mapgen.git/atom/?h=master',
		success: function(feed) { update_feed(feed, 1); }
	});
    $.getFeed({
		url: '/get_rss.php?url=http://git.xcsoar.org/cgit/master/website.git/atom/?h=master',
		success: function(feed) { update_feed(feed, 2); }
	});
});
