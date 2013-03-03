// ==UserScript==
// @name                Omerta Beyond
// @id                  Omerta Beyond
// @version             2.0
// @date                01-03-2013
// @description         Omerta Beyond 2.0 (We're back to reclaim the throne ;))
// @homepageURL         http://www.omertabeyond.com/
// @namespace           v4.omertabeyond.com
// @updateURL           https://raw.github.com/OmertaBeyond/OBv2/master/beyond.meta.js
// @supportURL          https://github.com/OmertaBeyond/OBv2/issues
// @icon                https://raw.github.com/OmertaBeyond/OBv2/master/images/logo.small.png
// @screenshot          https://raw.github.com/OmertaBeyond/OBv2/master/images/logo.small.png
// @author              OBDev Team <info@omertabeyond.com>
// @author              vBm <vbm@omertabeyond.com>
// @author              Dopedog <dopedog@omertabeyond.com>
// @author              Rix <rix@omertabeyond.com>
// @author              MrWhite <mrwhite@omertabeyond.com>
// @license             GNU General Public License v3
// @contributionURL     https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=sbanks%40omertabeyond%2ecom&lc=GB&item_name=Omerta%20Beyond&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
// @contributionAmount  €3.00
// @encoding            UTF-8
// @priority            1
// @require             https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @resource    favicon https://raw.github.com/OmertaBeyond/OBv2/master/images/favicon.png
// @resource    logo    https://raw.github.com/OmertaBeyond/OBv2/master/images/logo.png
// @resource    prev    https://raw.github.com/OmertaBeyond/OBv2/master/images/prev.png
// @resource    next    https://raw.github.com/OmertaBeyond/OBv2/master/images/next.png
// @resource    reply   https://raw.github.com/OmertaBeyond/OBv2/master/images/reply.png
// @resource    delete  https://raw.github.com/OmertaBeyond/OBv2/master/images/delete.png
// @include             http://*.omerta3.com/*
// @include             http://omerta3.com/*
// @include             http://*.barafranca.com/*
// @include             http://barafranca.com/*
// @include             http://*.barafranca.us/*
// @include             http://barafranca.us/*
// ==/UserScript==

// Prevent Omerta's jQuery to conflict with our
this.$ = this.jQuery = jQuery.noConflict(true);

/*
* Define constants for our website
*/

const OB_WEBSITE = 'http://www.omertabeyond.com';
const OB_API_WEBSITE = 'http://gm.omertabeyond.com';
const OB_NEWS_WEBSITE = 'http://news.omertabeyond.com';
const OB_STATS_WEBSITE = 'http://stats.omertabeyond.com';
const v = 'com';
const RAID_SPOTS_CORDS = {
	'Detroit': {
		'Car Lot (Thunderbolt)': 'F3',
		'Car Lot (Avus)': 'G10',
		'Car Lot (Spyder)': 'J6',
		'Whiskey Stills': 'G6',
		'Farm (Marijuana)': 'F1',
		'Farm (Beer)': 'G1',
		'Docks (Heroin)': 'H8',
		'Docks (Cognac)': '?',
		'Factory': 'E4',
		'Scrapyard': 'I2',
		'Bar': 'G7',
		'Restaurant': 'H7',
		'Army Surplus Store': 'F10',
		'Lawyers Office': 'H6'
	},
	'Chicago': {
		'Car Lot (Thunderbolt)': 'D5',
		'Car Lot (Avus)': 'J7',
		'Car Lot (Spyder)': 'H5',
		'Whiskey Stills': 'F6',
		'Farm (Marijuana)': 'L9',
		'Farm (Beer)': 'M7',
		'Docks (Heroin)': 'F7',
		'Docks (Cognac)': '?',
		'Factory': 'M10',
		'Scrapyard': 'L7',
		'Bar': 'H6',
		'Restaurant': 'H8',
		'Army Surplus Store': 'C4',
		'Lawyers Office': 'E5'
	},
	'Las Vegas': {
		'Car Lot (Spyder)': 'J7',
		'Scrapyard': 'F6',
		'Bar': 'H7',
		'Restaurant': 'I6',
		'Army Surplus Store': 'E5'
	},
	'Corleone': {
		'Farm (Marijuana)': 'I7',
		'Scrapyard': 'G6',
		'Restaurant': 'H6',
		'Army Surplus Store': 'F5'
	},
	'Palermo': {
		'Car Lot (Thunderbolt)': 'E5',
		'Car Lot (Spyder)': 'J8',
		'Farm (Marijuana)': 'H4',
		'Factory': 'G6',
		'Scrapyard': 'J7',
		'Bar': 'H5',
		'Restaurant': 'I6',
		'Army Surplus Store': 'G4',
		'Lawyers Office': 'H6'
	},
	'New York': {
		'Car Lot (Thunderbolt)': 'D4',
		'Car Lot (Avus)': 'K6',
		'Car Lot (Spyder)': 'F8',
		'Whiskey Stills': 'H5',
		'Farm (Marijuana)': 'B6',
		'Farm (Beer)': 'M9',
		'Docks (Heroin)': 'G8',
		'Docks (Cognac)': 'I8',
		'Factory': 'G4',
		'Scrapyard': 'K5',
		'Bar': 'I5',
		'Restaurant': 'F6',
		'Army Surplus Store': 'N7',
		'Lawyers Office': 'J6'
	},
	'Philadelphia': {
		'Car Lot (Thunderbolt)': 'E5',
		'Car Lot (Spyder)': 'J3',
		'Whiskey Stills': 'H5',
		'Farm (Marijuana)': 'B3',
		'Docks (Heroin)': 'G9',
		'Docks (Cognac)': 'L6',
		'Scrapyard': 'L2',
		'Bar': 'I4',
		'Lawyers Office': 'G6'
	},
	'Baltimore': {
		'Car Lot (Thunderbolt)': 'D6',
		'Car Lot (Spyder)': 'G2',
		'Farm (Marijuana)': 'M3',
		'Factory': 'K7',
		'Scrapyard': 'G10',
		'Bar': 'F5',
		'Restaurant': 'G6',
		'Army Surplus Store': 'B10',
		'Lawyers Office': 'F6'
	}
};

/*
* Helper functions
*/

function on_page(str) {
	if (window.location.hash.indexOf(str) != -1) {
		return true;
	} else {
		return false;
	}
}
function getV(name, standard) {
    return localStorage[name+'_'+v] || standard;
}
function setV(name, value) {
    return localStorage[name+'_'+v] = value;
}
function time() {
	return Math.floor(parseInt(new Date().getTime(), 10) / 1000);
}
$.urlParam = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return results[1] || 0;
};
function voteNow(save) {
	$('a[name="forticket"]').each(function() {
		window.open(this);
	});
	if (save) {//store last voting time
		setV('lastvote', time());
	}
}
function delMsg(what, name) {
	$('tr[class*="color"]').each(function() {
		var tr = $(this);
		var title = tr.find('td:eq(1)').text().replace(/\s/g, '').replace(/(\[\d+\])/g, '');
		var thismsgid = tr.find('td:eq(1)').find('a').attr('href').split('iMsgId=')[1];
		name = name.replace(/\s/g, '').replace(/(\[\d+\])/g, '');
		if(what == 'id'){
			if(name == thismsgid) {
				$.get('http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=delMsg&iId='+thismsgid+'&iParty=2', function(data) {
					$('font[color="red"]').text('Message deleted.');
				});
				tr.hide();
				tr.next().hide();
			}
		} else if (what == 'name') {
			if(name == title) {
				$.get('http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=delMsg&iId='+thismsgid+'&iParty=2', function(data) {
					$('font[color="red"]').text('Message deleted.');
				});
				tr.hide();
				tr.next().hide();
			}
		}
	});
}
function commafy(num) {
	var str = (num + '').split('.'),
		dec = str[1] || '',
		num = str[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
	return (dec) ? num + '.' + dec : num;
}
function getPow(name, i, def) {
	var info = getV(name, '' + def);
	if (name == 'bninfo') {
		var w = 2; //set width of buckets
	} else if (name == 'prefs') {
		var w = 1;
	}
	return (1 * info.substr((i * w), w)); //return int version of bucket
}
function setPow(name, i, value) {
	var info = getV(name, '0');
	if (name == 'bninfo') {
		var w = 2; //set width of buckets
	} else if (name == 'prefs') {
		var w = 1;
	}
	i = i * w; //set string index
	value += ''; //toString
	while (value.length < w) {
		value = '0' + value; //pad with zeros
	}
	if (i > 0 && (i + w) < info.length) {
		info = info.substring(0, i) + value + info.substring(i + w); //value goes in middle
	} else if (i === 0) {
		info = value + info.substring(w); //value goes at beginning
	} else if ((i + w) >= info.length) {
		info = info.substring(0, i) + value; //value goes at end
	} else {
		return;
	}
	setV(name, info); //store string
}
function bnUpdate(current){
	var xpath = current ? '#game_container' : '#str2dom';//use current page OR xhr str2dom

	var nick = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(2) > td:eq(1) > a').text();
	var rank = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(7) > td:eq(1)').text();
	var type = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(9) > td:eq(1) > a').text();
	var city = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(10) > td:eq(1) > a').text();
	var health = 100 - parseInt($(xpath+' > table > tbody > tr > td:eq(2) > table > tbody > tr:eq(3) > td:eq(1) > a > table > tbody > tr > td').attr('width'));
	var ride = $(xpath+' > table > tbody > tr > td:eq(2) > table:eq(1) > tbody > tr:eq(2) > td:eq(1)').text();

	setV('bloodType', type);
	setV('nick', nick);

	//define max b/n judging by rank
	var ranks = ['Empty-suit', 'Delivery Boy', 'Delivery Boy', 'Picciotto', 'Shoplifter', 'Pickpocket', 'Thief', 'Associate', 'Mobster', 'Soldier', 'Swindler', 'Assassin', 'Local Chief', 'Chief', 'Bruglione', 'Capodecina', 'Godfather', 'First Lady'];
	var maxBooze = [1, 2, 2, 5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 70, 70];
	var maxNarcs = [0, 0, 0, 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 20, 20, 20];
	for(booze=0,narc=0, i=0;i<=17;i++){
		if(ranks[i]==rank){
			booze = maxBooze[i]; narc = maxNarcs[i];
			break;
		}
	}
	setPow('bninfo', 0, narc);
	setPow('bninfo', 1, booze);

	//parse city to ID
	var cities = ['Detroit', 'Chicago', 'Palermo', 'New York', 'Las Vegas', 'Philadelphia', 'Baltimore', 'Corleone'];
	for(var cityCode=0, i=0;i<8;i++){
		if(city == cities[i]){
			cityCode = i+4;
			break;
		}
	}
	setPow('bninfo', 2, cityCode);//save

	//parse plane to ID
	var rides = ['none', 'geen', 'Fokker DR-1' ,'Havilland DH 82A' ,'Fleet 7', 'Douglas DC-3'];
	for(plane=0, i=0;i<=5;i++){
		if(rides[i] == ride){
			plane = [0, 0, 1, 2, 3, 4][i];
			break;
		}
	}
	setPow('bninfo', 3, plane);//save
}

/*
* Main game listener
*/


if (document.getElementById('game_container') !== null) {
	document.getElementById('game_container').addEventListener('DOMNodeInserted', function(event) {
		if (event.target.nodeType != 1) {
			return false;
		}
		if ($(event.target).attr('data-beyond-fired') !== undefined) {
			return false;
		}

		$(event.target).attr('data-beyond-fired', 'true');

		var wlh = window.location.hash;
		var nn  = event.target.tagName.toLowerCase();
		var nid  = event.target.getAttribute('id');

		if (on_page('family.php') && nn == 'center') {

			// add HR, Deaths and Worth
			var famid = wlh.split('=')[1];
			var famIdFromImg = $('img[src*="family_image.php"]').attr('src').match(/\d+/g)[0];
			var famname = $('td.profilerow').text().split(' ')[0].trim().toLowerCase();
			var url = (famid === famIdFromImg) ? 'id='+famid : 'ing='+famname;
			var ownfam = getV('family', '');

			$.getJSON(OB_API_WEBSITE + '/?p=stats&w=fampage&v='+v+'&' + url, function(data) {

				/*
				 * Family position and worth
				 */
				$('td.subtableheader').first().closest('tr').after(
					$('<tr>').append(
						$('<td>').addClass('subtableheader').text('Position:'),
						$('<td>').addClass('profilerow').text('#'+data['pos']+' - Worth: '+data['worth']+'')
					)
				);

				// add HQ space to members
				var hq = $('table.thinline:eq(0) > tbody > tr:eq(12) > td:last').text()
				var members = $('table.thinline:eq(0) > tbody > tr:eq(10) > td:last').text()
				$('table.thinline:eq(0) > tbody > tr:eq(10) > td:last').text(members+'/'+hq);

				// add color to HQ space
				var hqperc = ((members/hq)*100);
				$('table.thinline:eq(0) > tbody > tr:eq(10) > td:last').css({'background-image': '-moz-linear-gradient(left, #CCCCCC '+hqperc+'%, #F0F0F0 '+hqperc+'%)'})

				// add color to donating %
				var doperc = $('table.thinline:eq(0) > tbody > tr:eq(11) > td:last').text().split(' (')[0];
				$('table.thinline:eq(0) > tbody > tr:eq(11) > td:last').css({'background-image': '-moz-linear-gradient(left, #CCCCCC '+doperc+', #F0F0F0 '+doperc+')'})

				// add color to rankprogress
				if(famname == ownfam.toLowerCase()) {
					var rankperc = $('table.thinline:eq(0) > tbody > tr:last > td:last').text().split(' (')[1].replace(')', '');
					$('table.thinline:eq(0) > tbody > tr:last > td:last').css({'background-image': '-moz-linear-gradient(left, #CCCCCC '+rankperc+', #F0F0F0 '+rankperc+')'})
				}

				// add HR
				$('table.thinline').first().find('tbody').append(
					$('<tr>').append(
						$('<td>').addClass('subtableheader').text('Ranks:'),
						$('<td>').addClass('profilerow').append(
							$('<table>').attr('width', '100%').append(
								$('<tr>').append($('<td>').text('Godfather/First Lady:'), $('<td>').addClass('bold').text(data['hr']['gf'])),
								$('<tr>').append($('<td>').text('Capodecina:'), $('<td>').addClass('bold').text(data['hr']['cd'])),
								$('<tr>').append($('<td>').text('Bruglione:'), $('<td>').addClass('bold').text(data['hr']['brug'])),
								$('<tr>').append($('<td>').text('Chief:'), $('<td>').addClass('bold').text(data['hr']['chief'])),
								$('<tr>').append($('<td>').text('Local Chief:'), $('<td>').addClass('bold').text(data['hr']['lc'])),
								$('<tr>').append($('<td>').text('Assassin:'), $('<td>').addClass('bold').text(data['hr']['assa'])),
								$('<tr>').append($('<td>').text('Swindler:'), $('<td>').addClass('bold').text(data['hr']['swin'])),
								$('<tr>').append($('<td>').attr('colspan', '2').append($('<hr />'))),
								$('<tr>').append($('<td>').text('Total points:'), $('<td>').addClass('bold').text(data['hr']['pts']))
							)
						)
					)
				);

				/*
				 * Family deaths
				 */
				$('table.thinline:eq(1)').closest('td').append(
					$('<br />'),
					$('<table>').addClass('thinline').css('width', '100%').attr('cellspacing', '0').attr('cellpadding', '2').attr('rules', 'none').append(
						$('<tr>').append(
							$('<td>').addClass('tableheader').attr('colspan', '100%').text('Last family deaths').append(
								$('<div>').css({'float': 'right', 'margin-right': '5px', 'margin-top': '3px'}).append(
									$('<a>').attr('href', OB_NEWS_WEBSITE + '/deathslog/' + famid).attr('target', '_blank').append(
										$('<img>').addClass('brcImg').attr('title', 'View full deathslog')
									)
								)
							)
						),
						$('<tr>').append(
							$('<td>').attr('colspan', '100%').attr('bgcolor', 'black').attr('height', '1')
						),
						$('<tr>').append(
							$('<td>').addClass('bold').css('width', '28%').attr('align', 'left').text('Name'),
							$('<td>').addClass('bold').attr('align', 'center').text('Rank'),
							$('<td>').addClass('bold').attr('align', 'center').text('Date'),
							$('<td>').addClass('bold').css('text-align', 'right').text('Ago')
						)
					)
				);

				var deaths_body = $('table.thinline:eq(2)').find('tbody');
				if (data['deaths']) {
					$.each(data['deaths'], function(k, v) {
						var extra = (v['Akill'] == 1)?'(<b>A</b>) ':(v['BF'] == 1)?'(<b>BF</b>) ':'';

						deaths_body.append(
							$('<tr>').append(
								$('<td>').html(extra).append(
									$('<a>').attr('href', 'user.php?name=' + v['Name']).text(v['Name'])
								),
								$('<td>').attr('align', 'center').append(
									$('<a>').attr('href', OB_STATS_WEBSITE + '/history.php?v=com&name=' + v['Name']).text(v['Rank'])
								),
								$('<td>').attr('align', 'center').text(v['Date']),
								$('<td>').css('text-align', 'right').text(v['Agod'] + 'd ' + v['Agoh'] + 'h ' + v['Agom'] + 'm')
							)
						);
					});
				} else {
					deaths_body.append(
						$('<tr>').append(
							$('<td>').addClass('red').css('text-align', 'center').attr('colspan', '4').text('There are no deaths yet!')
						)
					);
				}

				// add Famlog
				$('table.thinline:eq(1)').closest('td').append(
					$('<br />'),
					$('<table>').addClass('thinline').css('width', '100%').attr('cellspacing', '0').attr('cellpadding', '2').attr('rules', 'none').append(
						$('<tr>').append(
							$('<td>').addClass('tableheader').attr('colspan', '100%').text('Last family changes').append(
								$('<div>').css({'float': 'right', 'margin-right': '5px', 'margin-top': '3px'}).append(
									$('<a>').attr('href', OB_NEWS_WEBSITE + '/famlog/' + famid).attr('target', '_blank').append(
										$('<img>').addClass('brcImg').attr('title', 'View full changelog')
									)
								)
							)
						),
						$('<tr>').append(
							$('<td>').attr('colspan', '100%').attr('bgcolor', 'black').attr('height', '1')
						),
						$('<tr>').append(
							$('<td>').addClass('bold').css('width', '28%').attr('align', 'left').text('Date'),
							$('<td>').addClass('bold').attr('align', 'left').text('Change')
						)
					)
				);

				var changes_body = $('table.thinline:eq(3)').find('tbody');
				if (data['changes']) {
					$.each(data['changes'], function(k, v) {
						changes_body.append(
							$('<tr>').append(
								$('<td>').css('width', '28%').attr('align', 'left').attr('valign', 'top').text(v['date']),
								$('<td>').attr('align', 'left').text(v['text'])
							)
						);
					});
				} else {
					changes_body.append(
						$('<tr>').append(
							$('<td>').addClass('red').css('text-align', 'center').attr('colspan', '2').text('There are no changes yet!')
						)
					);
				}
			});
		} // end of family page

		/*
		 *
		 * RAIDPAGE
		 *
		 */
		if (on_page('index.php?module=Spots') && nn == 'div' && nid == 'map') {
			var spot_table = $('<table>').addClass('thinline').css({'color': '#000', 'width': '630px', 'background-color': '#F0F0F0', 'border': '1px solid black', 'font-family': 'Tahoma, Verdana'}).attr('cellpadding', '0').append(
				$('<tr>').addClass('tableheader').append(
					$('<td>').html('&nbsp;'),
					$('<td>').text('Type'),
					$('<td>').text('Owner'),
					$('<td>').text('Profit left'),
					$('<td>').text('Protection'),
					$('<td>').text('Next raid'),
					$('<td>').text('Invite')
				),
				$('<tr>').append(
					$('<td>').attr('height', '2').attr('bgcolor', 'black').attr('colspan', '7')
				)
			);

			var secs = [];
			var user = getV('nick', '');
			var ownerid = null;
			var city = $('b[data-beyond-fired="true"]').text();
			$('div[id*="spot_"]').not('div[id*="spot_d"]').not('div[id*="spot_e"]').each(function() {
				id = parseInt($(this).attr('id').replace('spot_', ''), 10);
				spot_default = $('#spot_default_' + id);
				type = spot_default.find('b').first().text();
				owner = spot_default.find('td:eq(1)').text();
				rpfam = (owner.split(' ')[1]?owner.split(' ')[1]:'');
				profit = spot_default.find('tr:eq(2)').find('td:eq(1)').html();
				protnum = $('#jsprogbar_div_protection_' + id).text();
				prot = $('#jsprogbar_protection_' + id).clone();

				prot.find('div[id*="jsprogbar_div_protection_"]').attr('style', '').css({'text-align': 'center', 'position': 'absolute', 'width': '100px'}).empty().append(
					$('<font>').attr('color', '#000').text(protnum + '%')
				);

				spot_time = '';
				// Not sure if this is the best / cleanest selector
				// original code:
				// if ($X('//*[@id="spot_default_'+id+'"]/table/tbody/tr[2]/td[2]') !== undefined) {
				if (spot_default.find('table > tbody > tr:eq(1) > td:eq(1)').length) {
					spot_time = spot_default.find('table > tbody > tr:eq(1) > td:eq(1)').html();
				}
				if (spot_time === '<b>now</b>') {
					spot_time = 'Now!';
					secs.push(0);
				} else {
					spot_time = '';
					var seconds = spot_default.find('table > tbody > tr:eq(1) > td:eq(1) > span').attr('data-timeleft');
					spot_time = spot_default.find('table > tbody > tr:eq(1) > td:eq(1) > span').text().replace(' minutes', 'M ').replace(' seconds', 'S');// should replace for a countdown
					secs.push(seconds);
				}

				show_form = true;

				owner_string = (owner!='Local Mob'?('<a href="/user.php?nick='+owner.split(' ')[0]+'">'+owner.split(' ')[0]+'</a> '+ (owner.split(' ')[1]?owner.split(' ')[1]:'')):owner);
				if (!getV('family', '').search(rpfam)) {
					show_form = false;
				}
				spot_table.append(
					$('<tr>').css('height', '22px').append(
						$('<td>').css('padding-left', '5px').text(RAID_SPOTS_CORDS[city][type]),
						$('<td>').text(type),
						$('<td>').html(owner_string),
						$('<td>').css({'text-align': 'right', 'padding-right': '10px'}).text(profit),
						$('<td>').append(
							$('<table>').css({'border': '1px solid #000', 'margin': '0', 'padding': '0', 'width': '102px', 'border-radius': '3px'}).attr('cellpadding', '0').attr('cellspacing', '0').append(
								$('<tr>').append(
									$('<td>').append(prot)
								)
							)
						),
						$('<td>').css('text-align', 'center').append(
							$('<div>').attr('id', 'timer_' + id).text(spot_time)
						),
						$('<td>').css('text-align', 'center').append(
							$('<input>').attr({'type': 'button', 'data-spot-id': id}).val('Go!').css({'display': 'none', 'border-radius': '5px'}).click(function() {
								$('input[name="type"]').val($(this).attr('data-spot-id'));
								unsafeWindow.$('#raid_form').trigger('submit');
							})
						)
					)
				);

				if (show_form) {
					spot_table.find('input[data-spot-id="' + id + '"]').show();
				}

				if (owner.split(' ')[0] == user) {
					ownerid = id;
				}
			});

			form_table = $('<form>').attr({'id': 'raid_form', 'method': 'post', 'action': '/BeO/webroot/index.php?module=Spots&action=start_raid'}).append(
				$('<input>').attr({'name': 'type', 'type': 'hidden'}),
				$('<table>').addClass('thinline').css({'color': '#000', 'width': '630px', 'background-color': '#F0F0F0', 'border': '1px solid black'}).append(
					$('<tr>').append(
						$('<td>').addClass('tableheader').attr('colspan', '2').text('Information')
					),
					$('<tr>').append(
						$('<td>').attr({'colspan': '2', 'height': '1', 'bgcolor': 'black'})
					),
					$('<tr>').css('background-color', '#F0F0F0')
				)
			);

			if (ownerid !== null && $('#spot_extra_' + ownerid).length) {
				form_table.find('tr').last().append(
					$('<td>').html($('#spot_extra_' + ownerid).html())
				);
			} else {
				form_table.find('tr').last().append(
					$('<td>').css('text-align', 'right').text('Bullets'),
					$('<td>').css('padding-left', '40px').append(
						$('<input />').attr({'id': 'raidpagebullets', 'name': 'bullets', 'type': 'text', 'size': '3', 'value': '200'}).css({'border-radius': '5px', 'padding-left': '4px'})
					)
				);
				form_table.find('tbody').append(
					$('<tr>').css('background-color', '#F0F0F0').append(
						$('<td>').css('text-align', 'right').text('Driver'),
						$('<td>').css('padding-left', '40px').append(
							$('<input />').attr({'id': 'raidpagedriver', 'name': 'driver', 'type': 'text'}).css({'border-radius': '5px', 'padding-left': '4px'})
						)
					)
				);
			}

			$('#game_container').empty().append(
				$('<center>').append(
					$('<br />'),
					form_table,
					$('<br />'),
					spot_table
				)
			);

			$('#raidpagedriver').focus();
		} // end of raidpage

//---------------- My account ----------------
		if (on_page('/information.php') && nn == 'table') {
			bnUpdate(1);
		}

//---------------- 1-click voter ----------------
		if (on_page('/vfo.php') && nn == 'center') {
			$('a[href*="votelot.php"]').attr('name', 'forticket');

			$('td.tableheader:first').html(
				$('<span>').addClass('orange').css({'cursor': 'pointer', 'color': 'orange'}).attr({'id': 'votelink', 'title': ''}).text($('td.tableheader:first').text())
			).click(function () {
					voteNow(false);
			});
			var lastVote = getV('lastvote', 0); //get last voting time
			if (lastVote === 0) {
				if (confirm('You haven\'t used the 1-click voter yet!\nDo you want to use it now?')) {
					voteNow(true);
				}
			} else { //not first run
				var till = (parseInt(lastVote, 10) + 86400) - time(); // time till next vote
				var msg = '';
				if (till <= 0) { // user can vote again so ask
					var ago = time() - lastVote; // time since last vote
					msg += 'You haven\'t used the 1-click voter today!' + '\n' + 'Since you last used the 1-click voter, it\'s been:\n';
					msg += Math.floor(ago / 86400) + ' days, '; // days
					msg += Math.floor((ago % 86400) / 3600) + ' hours, '; // hours
					msg += Math.floor((ago % 3600) / 60) + ' minutes and '; // minutes
					msg += Math.floor(ago % 60) + ' seconds.'; // seconds
					msg += '\n' + 'Do you want to use the 1-click voter now?';
				} else { // can't vote yet
					msg += 'You can\'t vote again yet!\nPlease wait another:\n';
					msg += Math.floor(till / 3600) + ' hours, '; // hours
					msg += Math.floor((till % 3600) / 60) + ' minutes and '; // minutes
					msg += Math.floor(till % 60) + ' seconds.'; // seconds
					msg += '\n' + 'Do you still want to vote?';
				}
				if (confirm(msg)) {
					voteNow(true);
				}
			}
		}
//---------------- Group Crimes ----------------
		// GroupCrime general accept focus
		if (on_page('module=GroupCrimes') && nn == 'center') {
			//focus on accept
			$('a').filter(function(){
				return (/Accept/i).test($(this).text());
			}).focus();
			//focus on transfer
			$('a').filter(function(){
				return (/Make Transfer/i).test($(this).text());
			}).focus();
		}
		//Heist LE autoform
		if (on_page('module=Heist') && nn == 'center') {
			$('input[name="bullets"]').val('50');
			$('select[name="gun"]').val('real');
			$('input[name="driver"]').focus();
		}
		//OC accept focus
		if (on_page('/orgcrime2.php') && nn == 'br') {
			//focus on accept
			$('a').filter(function(){
				return (/Yes/i).test($(this).text());
			}).focus();
		}
		//OC Participants autoform
		if (on_page('?takepart=yes') && nn == 'form') {
			//WE
			$('input[name="bulletz"]').val('100');
			$('select[name="guns"]').val('2');
			//EE
			$('input:radio[name="exploz"]').prop('checked', true);
			//ALL
			$('input[type="submit"]').focus();
		}
		//MOC Participants autoform
		if (on_page('module=MegaOC') && nn == 'form') {
			//WE
			$('input[type="text"]').val('500');
			//EE
			$('input:radio:eq(2)').prop('checked', true);
			//ALL
			$('input[type="submit"]').focus();
		}
//---------------- Mail ----------------
		//Inbox
		if (on_page('action=inbox') && nn == 'center'){
			//save unread msg and msg ids
			var msg = $('td[style="cursor:pointer;cursor:hand"]').length;
			var unreadmsg = $('tr.color2').length;
			var id = [];
			for(var i=0;i<msg;i++){ //find first open spot
				id[i] = $('a[href*="showMsg"]:eq('+i+')').attr('href').split('?')[1].match(/\d+/g);
				setV('msgids', id.join(',')); //join and save values
			}
			var unreadid = [];
			for(var a=0;a<unreadmsg;a++){ //find first open spot
				unreadid[a] = $('tr.color2 > td:eq(1) > a').attr('href').split('?')[1].match(/\d+/g);
				setV('unread', unreadid.join(',')); //join and save values
			}
			//delete and reply icons
			var num = 1;
			setTimeout(function () {
				$('tr[class*="color"]').each(function() {
					var id = $(this).children('td:eq(1)').children('a').attr('href').split('?')[1].match(/\d+/g)[0];
					$(this).children('td:eq(0)').append(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete'}).css('cursor', 'pointer').click(function() {
							delMsg('id', id)
						})
					);
					if ($(this).children('td:eq(2)').children('a').length) { //add reply icon
						$(this).children('td:eq(0)').append(
							$('<a>').attr('href', 'BeO/webroot/index.php?module=Mail&action=sendMsg&iReply='+id).html(
								$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('reply'), title: 'Reply'})
							)
						);
					}
					if (num < 11) { //add msg hotkeys
						var title = $(this).children('td:eq(1)').children();
						title.html('['+(num == 10 ? 0 : num)+'] '+title.html());
						title.attr('accesskey', (num == 10 ? 0 : num));
						num++;
					}
				});
			}, 0);
			//hotkeys for system delete
			var keys = ['-', '=', '[', ']', ';', '\''];
			var selectors = $('td[align="right"][colspan="100%"] > a');
			for (i = -1; ++i < selectors.length;) {
				$('td[align="right"][colspan="100%"] > a:eq('+i+')').attr({accesskey: keys[i], title: 'Hotkey: '+keys[i]});
			}
			//select all button
			$('td[align="right"][colspan="100%"]').prepend(
				$('<span>').css('float', 'left').append(
					$('<input />').attr({type: 'button', value: '(Un)Select All'}).click(function() {
						$('[name="selective[]"]').each(function() {
							$(this).prop('checked', !$(this).prop('checked'));
						});
					})
				)
			);
			//add custom system delete
			$('td[align="right"][colspan="100%"] > a:eq(0)').before($('<br />'));
			$('td[align="right"][colspan="100%"]').append(
				$('<br />'),
				$('<span>').text('Delete System: '),
				$('<span>').css('cursor', 'pointer').text('Super Lottery').click(function() {
					delMsg('name', 'Omerta Super Lottery');
				}),
				$('<span>').text(' | '),
				$('<span>').css('cursor', 'pointer').text('Target not found').click(function() {
					delMsg('name', 'Target not found');
				}),
				$('<span>').text(' | '),
				$('<span>').css('cursor', 'pointer').text('Target found').click(function() {
					delMsg('name', 'Target found');
				}),
				$('<span>').text(' | '),
				$('<span>').css('cursor', 'pointer').text('Promoted').click(function() {
					delMsg('name', 'Promoted');
				})
			);
		}

		//Outbox
		if (on_page('action=outbox') && nn == 'center'){
			setTimeout(function () {
				$('a[href*="showSentMsg"]').each(function() {
					var id = $(this).attr('href').split('?')[1].match(/\d+/g)[0];
					$(this).parent().prepend(
						$('<a>').attr('href', 'BeO/webroot/index.php?module=Mail&action=delMsg&iId='+id+'&iParty=1').html(
							$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete'})
						)
					);
				});
			}, 0);
		}

		//Show message
		if (on_page('action=showMsg') && nn == 'center') {
			var id = wlh.split('iMsgId=')[1].match(/\d+/g)[0];
			var ids = getV('msgids', '').split(',');
			for(var i = 0;i<ids.length;i++){
				if (ids[i] == id) {
					var next = ids[i-1];
					var prev = ids[i+1];
				}
			}
			//check unread msg and grab obay bullets
			var unread = getV('unread', '').split(',');
			for (var x = 0; x < unread.length; ++x) {
				if (unread[x] !== '' && unread[x] == id) { //msg is unread
					var msgTyp = $('tr.tableitem').text().split('Type:')[1].split('Sent:')[0];
					var arr = $('table.thinline > tbody > tr:eq(7) > td').html().split(' ');
					var bulletmsg = new RegExp('Obay bid succesful');
					if (bulletmsg.test(msgTyp)) { //grab obay bullets from message
						setV('obaybul', (getV('obaybul', 0) + parseInt(arr[2], 10)));
					}
					// resave unread msg's, without our msg
					var str = '';
					for (var y = 0; y < unread.length; ++y) {
						if (unread[y] !== '' && unread[y] != id) {
							str += ','+unread[y];
						}
					}
					setV('unread', str.substr(1));
					x = unread.length; // not needed to continue because we found our id
				}
			}
			//add previous and next arrows
			setTimeout(function () {
				$('table.thinline > tbody > tr > td.tableheader:eq(1)').append(
					$('<span>').css({'float': 'right', 'padding-top': '2px'}).append(
						$('<a>').attr({id: 'prev', href: '/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+prev}).append(
							$('<img>').addClass('inboxImg').attr({title: 'Previous', src: GM_getResourceURL('prev')})
						)
					).append(
						$('<a>').attr({id: 'next', href: '/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+next}).append(
							$('<img>').addClass('inboxImg').attr({title: 'Next', src: GM_getResourceURL('next')})
						)
					)
				);
				for(var j = 0;j<ids.length;j++){
					if (ids[j] == id) {
						if(j===0) {
							$('a#next').css('visibility', 'hidden');
						}
						if (j==ids.length-1) {
							$('a#prev').css('visibility', 'hidden');
						}
					}
				}
			}, 0);
			//replace reply and delete links
			var linkz = $('table.thinline > tbody > tr:eq(9) > td > a');
			if (linkz.length == 1) {
				setTimeout(function () {
					$('table.thinline > tbody > tr:eq(9) > td > a').html(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete ([)'})
					).attr('accesskey', '[');
				}, 0);
			} else {
				setTimeout(function () {
					$('table.thinline > tbody > tr:eq(9) > td > a:first').html(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete ([)'})
					).attr('accesskey', '[');
					$('table.thinline > tbody > tr:eq(9) > td > a:last').html(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('reply'), title: 'Reply (])'})
					).attr('accesskey', ']');
				}, 0);
			}
			//add arrow hotkeys
			$(window).keydown(function(event){
				var key = event.which;
				if(key==39){ //right, reply
					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=sendMsg&iReply='+id;
				}
				if(key==38 && id != ids[0]) { //up, select previous
					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+next;
				}
				if(key==40 && id != ids[ids.length-1]) { //down, select next
					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+prev;
				}
				if(key==37) { //left, delete
					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=delMsg&iId='+id+'&iParty=2';
				}
			});
		}
		//focus on text area
		if (on_page('iReply=') && nn == 'center') {
			$('textarea').focus();
		}
		//redirect on send message
		if (on_page('action=sendMsg') && nn == 'b') {//needs testing
			if ($('font:eq(0)').text().indexOf('Message sent to') != -1) {
				setTimeout(function () {
					$('a')[0].click();
				}, 1000);
			}
		}

		//look its me
		if ((on_page('users_online') && nn == 'center') || (on_page('allusers.php') && nn == 'div') || (on_page('global_stats')) && nn == 'center') {
			var nick = getV('nick', '');
			if (nick !== '') {
				$('a[class!="link"]').each(function() {
					if ($(this).text() == nick || $(this).text() == nick + '+') {
						$(this).html('<span style="color:green;font-weight:bold;">' + $(this).html() + '</span>');
					}
				});
			}
		}
//---------------- Bank ----------------
		if (on_page('/bank.php') && nn == 'center') {
			//auto reload after transfer
			if ($('center').html().search('<table') == -1) {
				setTimeout(function () {
					window.location.reload();
				}, 1000);
			}
			// Add amount of interest next to %
			if($('table.thinline:eq(1) > tbody > tr:eq(1) > td:eq(1)').length) { // check for banked money
				var money = $('table.thinline:eq(1) > tbody > tr:eq(1) > td:eq(1)').text();
				var rx = $('table.thinline:eq(1) > tbody > tr:eq(3) > td:eq(1)').text(); // get recieved amount
				var tmp = 1 * rx.replace(/\D/g, '') - 1 * money.replace(/\D/g, ''); // calculate interest
				$('table.thinline:eq(1) > tbody > tr:eq(2) > td:eq(1)').html($('table.thinline:eq(1) > tbody > tr:eq(2) > td:eq(1)').text()+' &rarr; ($'+commafy(tmp)+')');
				setTimeout(function() {
					setV('interest', tmp);
				}, 0);

				// Interest reminder
				var seconds = 0;
				seconds = (seconds + (parseInt($('span:eq(14)').html().split(' hours')[0], 10) * 3600));
				seconds = (seconds + (parseInt($('span:eq(14)').html().split(' hours')[1].split(' minutes')[0], 10) * 60));
				seconds = (seconds + parseInt($('span:eq(14)').html().split(' minutes')[1].split(' seconds')[0], 10));
				setTimeout(function() {
					setV('banktleft', (time() + seconds));
				}, 0);
			}
			// Calculators
			if($('td[width="33%"]:eq(2)').length) {
				$('td[width="33%"]:eq(2)').append(
					$('<br />'),
					$('<table>').addClass('thinline').attr({width: '100%', align: 'center', rules: 'none'}).append(
						$('<tr>').append(
							$('<td>').addClass('tableheader').attr('colspan', '4').text('Calculators')
						), $('<tr>').append(
							$('<td>').attr({'align': 'left', 'width': '20%'}).text('You send:'),
							$('<td>').attr({'align': 'left', 'width': '25%'}).append(
								$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '13'}).keyup(function() {
									var amt = $(this).val().replace(/\D+/g, '');
									$('#get').text('$'+commafy(Math.round(amt*0.9)));
								})
							),
							$('<td>').attr({'align': 'left', 'width': '23%'}).text('User gets:'),
							$('<td>').attr({'align': 'left', 'id': 'get'}).text('$0')
						), $('<tr>').append(
							$('<td>').attr({'align': 'left', 'width': '20%'}).text('You want:'),
							$('<td>').attr({'align': 'left', 'width': '25%'}).append(
								$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '13'}).keyup(function() {
									var amt = $(this).val().replace(/\D+/g, '');
									$('#give').text('$'+commafy(Math.round(amt/0.9)));
								})
							),
							$('<td>').attr({'align': 'left', 'width': '23%'}).text('User sends:'),
							$('<td>').attr({'align': 'left', 'id': 'give'}).text('$0')
						), $('<tr>').append(
							$('<td>').attr({'align': 'left', 'width': '20%'}).text('Deposit:'),
							$('<td>').attr({'align': 'left', 'width': '25%'}).append(
								$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '13'}).keyup(function() {
									var amt = $(this).val().replace(/\D+/g, '');
									$('#int').text('$'+commafy(Math.round(amt* (amt >= 1000000 ? (amt >= 3000000 ? (amt >= 6000000 ? (amt >= 10000000 ? (amt >= 15000000 ? (amt >= 21000000 ? (amt >= 27000000 ? (amt >= 35000000 ? 1.01 : 1.015) : 1.02) : 1.025 ) : 1.03) : 1.035) : 1.04) : 1.045) : 1.05 ))));
								})
							),
							$('<td>').attr({'align': 'left', 'width': '23%'}).text('Receive:'),
							$('<td>').attr({'align': 'left', 'id': 'int'}).text('$0')
						)
					)
				)
			}
			// m/k usage
			var inputs = $('input[name="amount"], input#amount');
			inputs.each(function() {
				$(this).keydown(function(event) {
					var symcode = event.which;
					if(symcode == 75){
						$(this).val($(this).val() + '000');
					}
					if(symcode == 77){
						$(this).val($(this).val() + '000000');
					}
					$(this).val($(this).val().replace(/k|m/g, ''));
					return (symcode == 75 || symcode == 77)?false:true;
				});
			});
		}
//---------------- All users ----------------
		if (on_page('/allusers.php') && nn == 'div') {
			//add pagenumber
			var page = $.urlParam('start');
			page = (page/15)+1;
			$('a[href*="/allusers.php"]:eq(2)').before($('<p>').text('Page: '+page));

			//edit show/hide dead link
			var dead = $.urlParam('dead');
			if(dead !== null) {
				var url = wlh.replace('#', '');
				var hs = (dead == 'HIDE') ? 'SHOW' : 'HIDE';
				$('a[href*="/allusers.php?dead="]').attr('href', url.replace(dead, hs));
			}
		}
//---------------- TOP 3 ----------------
		//Control Panel
		if (on_page('module=Family') && nn == 'div') {
			//linkify CP log
			if(nid == 'jsprogbar_fam_rank_progress') {
				$('table.color2:eq(0) > tbody > tr > td').not(':first').not(':last').each(function( ) {
					if ($(this).text() !== '') {
						var len = $(this).html().trim().split(' ').length - 1;
						var who = $(this).html().trim().split(' ');
						if (who[0].match(/[A-Z]/g)) {
							who[0] = '<a href="/user.php?nick=' + who[0] + '"><b>' + who[0] + '</b></a>';
						}
						if (who[len].match(/[A-Z]/g)) {
							if(who[len] != 'Capo(s)') {
								if(who[len] != 'Object(s)') {
									if(who[len] != 'Unlocked') {
										who[len] = '<a href="/user.php?nick=' + who[len].match(/\D+/g)[0].replace('.', '') + '"><b>' + who[len] + '</b></a>';
									}
								}
							}
						}
						$(this).html(who.join(' '));
					}
				});
			}
			// Add promo calculation for CD/GF/FL.
			var brugP = parseInt($('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody > tr:eq(6) > td:eq(1)').text().replace(/\D/g, ''), 10);
			var perc = (brugP != '0') ? $('input[name="ppercentage"]').val() : 0;
			var cdP = parseInt((((brugP/100)*perc)+brugP), 10);
			var gfP = parseInt((((cdP/100)*perc)+parseInt(cdP, 10)), 10);
			$('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody > tr:eq(6) > td:eq(1)').removeAttr('colspan');
			$('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody > tr:eq(6)').append(
				$('<td>').text('Capodecina'),
				$('<td>').text('$ '+commafy(cdP))
			);
			$('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody').append(
				$('<tr>').append(
					$('<td>').text('GF / FL'),
					$('<td>').text('$ '+commafy(gfP))
				)
			);
		}
		//linkify opened CP log
		if (on_page('/familylog.php') && nn == 'table') {
			$('table.color2 > tbody > tr > td').not(':first').each(function( ) {
				if ($(this).text() !== '') {
					var len = $(this).html().trim().split(' ').length - 1;
					var who = $(this).html().trim().split(' ');
					if (who[0].match(/[A-Z]/g)) {
						who[0] = '<a href="/user.php?nick=' + who[0] + '"><b>' + who[0] + '</b></a>';
					}
					if (who[len].match(/[A-Z]/g)) {
						if(who[len] != 'Capo(s)') {
							if(who[len] != 'Object(s)') {
								if(who[len] != 'Unlocked') {
									who[len] = '<a href="/user.php?nick=' + who[len].match(/\D+/g)[0].replace('.', '') + '"><b>' + who[len] + '</b></a>';
								}
							}
						}
					}
					$(this).html(who.join(' '));
				}
			});
		}
		//Family bank
		if (on_page('/cpbank.php') && nn == 'center') {
			$('table.thinline:eq(0)').after($('<br />'), $('<table>').addClass('thinline').attr({width: '600', align: 'center', rules: 'none'}).append(
				$('<tr>').append(
					$('<td>').addClass('tableheader').attr('colspan', '4').text('Calculators')
				), $('<tr>').append(
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('You send:'),
					$('<td>').attr({'align': 'center', 'width': '25%'}).append(
						$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '15'}).keyup(function() {
							var amt = $(this).val().replace(/\D+/g, '');
							$('#get').text('$'+commafy(Math.round(amt*0.85)));
						})
					),
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('User gets:'),
					$('<td>').attr({'align': 'center', 'width': '25%', 'id': 'get'}).text('$0')
				), $('<tr>').append(
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('You want:'),
					$('<td>').attr({'align': 'center', 'width': '25%'}).append(
						$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '15'}).keyup(function() {
							var amt = $(this).val().replace(/\D+/g, '');
							$('#give').text('$'+commafy(Math.round(amt/0.85)));
						})
					),
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('User sends:'),
					$('<td>').attr({'align': 'center', 'width': '25%', 'id': 'give'}).text('$0')
				)
			));

			// m/k usage
			var inputs = $('input[name="amount"]');
			inputs.each(function() {
				$(this).keydown(function(event) {
					var symcode = event.which;
					if(symcode == 75){
						$(this).val($(this).val() + '000');
					}
					if(symcode == 77){
						$(this).val($(this).val() + '000000');
					}
					$(this).val($(this).val().replace(/k|m/g, ''));
					return (symcode == 75 || symcode == 77)?false:true;
				});
			});
		}
//---------------- Scratchtracker ----------------
		if (on_page('/scratch.php') && (nn == 'center' || nn == 'b' || nn == 'form')) {
			var unopened, monin, mils, bullets, scratches;
			unopened = getV('unopened', 0);
			monin = parseInt(getV('monin', 0), 10);
			mils = parseInt(getV('mils', 0), 10);
			bullets = parseInt(getV('bullets', 0), 10);
			scratches = parseInt(getV('scratches', 0), 10);

			if ($('b:last').text() == 'Congratulations!') { //grab winning event
				if ($('#game_container:contains(They have been added to your account!)').length) { //bullets
					var rex = new RegExp('won (\\d+) bullets');
					var r = $('#game_container').text().match(rex);
					bullets += parseInt(r[1]);
					setV('bullets', bullets);
				}
				if ($('#game_container:contains(It has been added to your account!)').length) { //money
					var rex = new RegExp('You have won \\$ (\\d+)');
					var str = $('#game_container').text().replace(/,/g, '');
					var r = str.match(rex);
					monin += parseInt(r[1]);
					setV('monin', monin);
					if (parseInt(r[1]) == 1000000) {
						mils += 1;
						setV('mils', mils);
					}
					$('input[name="scratch"]').focus()
				}
			}
			if ($('#game_container:contains(Start scratching)').length) { //grab scratching event
				scratches += 1;
				setV('scratches', scratches);
				if($('input[name="Check"]').length) {
					$('input[name="Check"]').focus();
				} else {
					$('input[type="submit"]').focus();
				}
			} else {
				if ($('input[name="codescratch"]').length) {//focus on unclaimed prices
					$('input[type="submit"]:eq(1)').focus()
				} else { //focus on scratch
					$('input[name="scratch"]').focus()
				}
			}

			var monout = (scratches * 5000);
			if ((monin - monout) < 0) {
				var profit = '-$'+commafy(monout - monin);
			} else {
				var profit = '$'+commafy(monin - monout);
			}
			var ppk = Math.round((((monout - monin) / bullets) * 100000) / 100000);
			if (isNaN(ppk) || bullets == 0) {
				ppk = 0;
			}

			$('#game_container').append(
				$('<div>').addClass('NRinfo').attr('id', 'info').css({'position': 'absolute', 'bottom': '10px', 'right': '10px', 'width': '200px', 'color': '#FFF', 'box-shadow': '2px 2px 2px 2px #1b1b1b', 'background-image': '-moz-linear-gradient(center top , #3F505F, #1B1B1B)', 'border': '2px double gray', 'opacity': '0.90', 'padding': '5px', 'border-radius': '5px'}).append(
					$('<center>').text('ScratchTracker').css('font-weight', 'bold'),
					$('<hr>').css({'color': 'gray'}),
					$('<div>').attr('id', 'statsscratcher').html('Scratched:<font style="float:right;"><b>'+commafy(scratches)+'</b></font><br />Money spent:<font style="float:right;"><b>$'+commafy(monout)+'</b></font><br />Money won:<font style="float:right;"><b>$'+commafy(monin)+'</b></font><br />Profit:<font style="float:right;"><b>'+profit+'</b></font><br />Millions:<font style="float:right;"><b>'+commafy(mils)+'</b></font><br />Bullets won:<font style="float:right;"><b>'+commafy(bullets)+'</b></font><br />Price per bullet:<font style="float:right;"><b>$'+commafy(ppk)+'</b></font>'),
					$('<hr>').css({'color': 'gray'}),
					$('<center>').append(
						$('<div>').attr('id', 'resetscratcher').css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'}).text('Reset stats').click(function() {
							$(this).text('Stats have been reset!');
							$('#statsscratcher').html('Scratched:<font style="float:right;"><b>0</b></font><br />Money spent:<font style="float:right;"><b>$0</b></font><br />Money won: <font style="float:right;"><b>$0</b></font><br />Profit:<font style="float:right;"><b>$0</b></font><br />Millions:<font style="float:right;"><b>0</b></font><br />Bullets won:<font style="float:right;"><b>0</b></font><br />Price per bullet:<font style="float:right;"><b>$0</b></font>');
							setV('monin', 0);
							setV('mils', 0);
							setV('bullets', 0);
							setV('scratches', 0);
						}).hover(function() {
							$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid #960011', 'cursor': 'pointer'});
						}, function () {
							$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'});
						})
					)
				)
			);
		}
//---------------- BulletTracker ----------------
		if (on_page('/bullets2.php') && nn == 'br') {
			var d = new Date();
			var btdate = getV('btdate', 0);
			if(d.getDate()>btdate){ setV('bttoday', 0); }
			var obaybul = parseInt(getV('obaybul', 0), 10);
			var btbullets = parseInt(getV('btbullets', 0), 10);
			var bttoday = parseInt(getV('bttoday', 0), 10);
			var btmoney = parseInt(getV('btmoney', 0), 10);
			if ($('#game_container:contains(Success, you bought)').length) {
				var rex = new RegExp('Success you bought (\\d+) bullets for \\$ (\\d+)');
				var str = $('#game_container').text().split('Bulletfactory')[0].replace(/,/g, '');;
				var r = str.match(rex);
				btbullets += parseInt(r[1], 10);
				bttoday += parseInt(r[1], 10);
				btmoney += parseInt(r[2], 10);
				setV('btbullets', btbullets);
				setV('bttoday', bttoday);
				setV('btmoney', btmoney);
				setV('btdate', d.getDate());
			}
			if (btbullets == 0) {
				var btdolpbul = 0;
			} else {
				var btdolpbul = Math.round((btmoney / btbullets) * 100) / 100;
			}
			$('#game_container').append(
				$('<div>').addClass('NRinfo').attr('id', 'btinfo').css({'position': 'absolute', 'bottom': '10px', 'right': '10px', 'width': '200px', 'color': '#FFF', 'box-shadow': '2px 2px 2px 2px #1b1b1b', 'background-image': '-moz-linear-gradient(center top , #3F505F, #1B1B1B)', 'border': '2px double gray', 'opacity': '0.90', 'padding': '5px', 'border-radius': '5px'}).append(
					$('<center>').text('BulletTracker').css('font-weight', 'bold'),
					$('<hr>').css({'color': 'gray'}),
					$('<div>').attr('id', 'btracker').html('Bullets bought:<font style="float:right;"><b>'+commafy(btbullets)+'</b></font><br />Bought today:<font style="float:right;"><b>'+commafy(bttoday)+'</b></font><br />Money spent:<font style="float:right;">$<b>'+commafy(btmoney)+'</b></font><br />Price per bullet:<font style="float:right;">$<b>'+commafy(btdolpbul)+'</b></font><br />Bought on Obay:*<font style="float:right;"><b>'+commafy(obaybul)+'</b></font><br /><font size="1">*not included in total or price per bullet</font>'),
					$('<hr>').css({'color': 'gray'}),
					$('<center>').append(
						$('<div>').attr('id', 'resetbt').css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'}).text('Reset stats').click(function() {
							$(this).text('Stats have been reset!');
							$('#btracker > font:not(:last-child) > b').text('0'); //temporary fix
							setV('btbullets', 0);
							setV('btmoney', 0);
							setV('bttoday', 0);
							setV('btdate', 0);
							setV('obaybul', 0);
						}).hover(function() {
							$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid #960011', 'cursor': 'pointer'});
						}, function () {
							$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'});
						})
					)
				)
			);
		}
//---------------- User Profile ----------------
		if (on_page('user.php') && nn == 'center') {

			var status = $('span#status').text();
			var inFam = ($('span#family > a').length?$('span#family > a').text():$('span#family').text());
			var alive = (status.search('Dead'));
			var unick = $('span#username').text();

			// DEAD or AKILLED ?
			if (!alive) {
				var rankings = '<a href="http://www.barafranca.com/BeO/webroot/index.php?module=Rankings&nick='+unick+'">View Rankings</a>';
				if($('img[src*="/userbadges/rip.gif"]').parent().get(0).tagName != 'A'){
					var akill = '<span style="color:red; font-weight:bold;"> (Akill) </span>';
					status += akill;
				}
				$.getJSON(OB_API_WEBSITE + '/?p=stats&w=deaths&v='+v+'&ing='+unick, function(data) {
					if (data["DiedAt"] === null) {
						$('span#status').text(status + ' | Death date is not known');
					} else {
						$('span#status').html(status + ' | '+rankings+' | Died at '+data['Date']+' OT ('+data['Agod']+'d '+data['Agoh']+'h '+data['Agom']+'m ago)');
					}
				});
			}
			if(status === 'Alive') {
				$.getJSON(OB_API_WEBSITE + '/?p=stats&w=laston&v='+v+'&ing='+unick, function(data) {
					if (data['LastOn'] === 0) { // 1970, thus not seen by logger
						$('span#status').text(status+' | This user has not been seen online by our logger yet');
					} else {
						$('span#status').html(status+' | Last on: '+data['Date']+' OT ('+data['Agod']+'d '+data['Agoh']+'h '+data['Agom']+'m ago)');
					}
				});
			}

			// Wealth
			var tr, x, y, z, xpath;
			tr = 10;
			x = $('#game_container').html().search('Marital status:');
			y = $('#game_container').html().search('SMS Status');
			z = $('#game_container').html().search('Family Buster of');

			if (x == -1) { tr--; }
			if (y == -1) { tr--; }
			if (z == -1) { tr--; }

			var wlth = $('table.thinline > tbody > tr:eq('+tr+') > td:eq(1)').text()

			var kind = [' ($0 - $50.000)', ' ($50.001 - $100.000)', ' ($100.001 - $500.000)', ' ($1.000.001 - $5.000.000)', ' ($5.000.001 - $15.000.000)', ' ( > $15.000.001)', ' ($500.001 - $1.000.000)'], i=1;
			var wealth = ['Straydog', 'Poor', 'Nouveau Riche', 'Very rich', 'Too rich to be true', 'Richer than God', 'Rich'];
			$.each(wealth, function(x){
				if(wlth.search(x)){
					$('table.thinline > tbody > tr:eq('+tr+') > td:eq(1)').text(wlth+kind[i])
				}
			});

			// Raceform
			var rf = $('table.thinline > tbody > tr:eq('+(tr+1)+') > td:eq(1)').text();
			var driver = ['Rookie', 'Co-Driver', 'Driver', 'Advanced Driver', 'Master Driver', 'Chauffeur', 'Advanced Chauffeur', 'Master Chauffeur', 'Racing Driver', 'Race Supremo', 'Champion'];
			for (i=0;i<=10;i++) {
				if(rf.match(driver[i]) && (rf.length == driver[i].length)) {
					$('table.thinline > tbody > tr:eq('+(tr+1)+') > td:eq(1)').text((i+1)+' - '+rf)
				}
			}

			// Actions
			var self = ($('table.thinline > tbody > tr:eq(2) > td:eq(1) > a > span').text() == getV('nick', ''));
			$('td.tableheader').parent().after(
				$('<tr>').append(
					$('<td>').addClass('profilerow').attr({'id': 'actions', 'colspan': '2', 'align': 'center'}).css('display', 'none').html('<a href="BeO/webroot/index.php?module=Heist&action=&who='+unick+'">Heist</a> | <a href="BeO/webroot/index.php?module=Spots&action=&driver='+unick+'">Raid</a> | <a href="kill.php?search='+unick+'">Hire Detectives</a>')
				)
			)
			if(!self && alive) {
				$('td.tableheader').append(
					$('<span>').text(' | '),
					$('<a>').attr({target: 'main', href: 'main.php', title: 'View History'}).text('View History').click(function() {
						setTimeout(function() {
							$('#game_container').empty();
							GM_xmlhttpRequest({
								method: "GET",
								url: OB_STATS_WEBSITE + '/history.php?v='+v+'&name='+unick,
								onload: function(response) {
									$('#game_container').html(response.responseText);
								}
							});
						}, 500);
					}),
					$('<span>').text(' | '),
					$('<span>').text('Actions').css('cursor', 'pointer').click(function() {
						$('#actions').toggle()
					})
				)
			} else {
				$('td.tableheader').append(
					$('<span>').text(' | '),
					$('<a>').attr({target: 'main', href: 'main.php', title: 'View History'}).text('View History').click(function() {
						setTimeout(function() {
							$('#game_container').empty();
							GM_xmlhttpRequest({
								method: "GET",
								url: OB_STATS_WEBSITE + '/history.php?v='+v+'&name='+unick,
								onload: function(response) {
									$('#game_container').html(response.responseText);
								}
							});
						}, 500);
					})
				)
			}
			if (parseInt(getPow('bninfo',4,-1),10) === 3 && inFam === 'None') {
				$('#actions').html($('#actions').html()+' | <a href="/BeO/webroot/index.php?module=Family&who='+unick+'">Invite to Family</a>');
			}
		}
//---------------- Linkify ----------------
		// Messages
		if (on_page('action=showMsg') && nn == 'center') {
			var msgType = $('.tableheader:eq(1) > b > strong').text();
			var msgTxt = '.thinline:eq(1) > tbody > tr:eq(4) > td';
			var arr = $(msgTxt).html().split(' ');
			var linkify = ['Route 66 heist', 'Organised Crime', 'Mega Organized Crime', 'Target not found', 'Carrace invite', 'Target found', 'Kill success', 'Witness statement', 'Condolences', 'found', 'Ticket update', 'Crashed Message', 'Invitation', 'Raid Notification', 'Married', 'Wedding Gift', 'Wedding', 'Wedding Invitation', 'shot!'];

			function setArr(num) {
				return arr[num] = '<a href="/user.php?nick=' + arr[num].match(/\w+/g)[0] + '"><b>' + arr[num].match(/\w+/g)[0] + '</b></a>';
			}

			var WitnessMsg = new RegExp(linkify[7]); // Witness statement
			if (WitnessMsg.test(msgType)) {
				setArr(3);
				setArr(5);
				$(msgTxt).html(arr.join(' '));
			}
			var TnFMsg = new RegExp(linkify[3]); // Target not found
			if (TnFMsg.test(msgType)) {
				setArr(5);
				$(msgTxt).html(arr.join(' '));
			}
		}
	}, true);
}

/*
* Menu listener
*/

$('#game_menu').one('DOMNodeInserted', function() {
	//change all users link
	$('a[href*="/allusers.php"]').attr('href', '/allusers.php?start=0&order=lastrank&sort=DESC&dead=HIDE');

	//add beyond menu
	var a = $('<a>').addClass('link').attr({'href': '#', 'data-box': 'true'}).append(
		$('<span>').addClass('title').css('background', 'url("https://raw.github.com/OmertaBeyond/OBv2/master/images/favicon.png") no-repeat scroll left center transparent').text('Beyond'),
		$('<span>').addClass('menu_open')
	);
	var div = $('<div>').addClass('menu').append(
		$('<a>').addClass('sublink').attr({target: 'main', href: 'main.php', title: 'Preferences'}).text('Preferences').click(function() {
			setTimeout(function() {
				$('#game_container').empty();
				$('#game_container').append(prefs_page);
			}, 500);
		})
	);

	$('a.link:eq(2)').before(a)
	$('a.link:eq(3)').before(div)

	var prefs_page = $('<span>').text('This will be the preferences page'); //here we can build prefs page
});

/*
* Info grabber
*/

var d = new Date();//check once every hour for new info
if(getV('nick', '') == '' || getV('bninfo', -1) == -1 || getV('brcDate', -1) != d.getHours()) {
	$.get('/information.php', function(data) {
		var a = data.split('<tbody');
		if(a[2]){ // fails on clicklimit or other error
			$('#wrapper').append(
				$('<div>').css('display', 'none').attr('id', 'str2dom').html(data)
			)
			bnUpdate(0);//call update fucntion
			$.get('/user.php?nick='+getV('nick', ''), function(data) {
				var a = data.split('<script');
				$('#wrapper').append(
					$('<div>').css('display', 'none').attr('id', 'xhr').html(a[0])
				)
				if($('#xhr').length) {
					var role = 1;//default is in a family
					var pos = $('span#position').attr('value');
					var fam = ($('span#family > a').length?$('span#family > a').text():$('span#family').text());
					var hascapo = ($('span#capo').length)?1:0;
					if(/None|Geen/.test(fam)){
						role = 0;
					} else {
						if(/Capo (of|van):/.test(pos)){
							role = 2;
						}
						if(/(Sottocapo|Consiglieri|Don) (of|van):/.test(pos)){
							role = 3;
						}
						if(hascapo) {
							role = 4;
						}
					}
					setV('family',fam);
					setPow('bninfo',4,role);//save
				}
				var d = new Date();//set check date
				setV('brcDate', d.getHours());
			});
		}
	});
}

// Add focus on front page
$('input[name="email"]').focus();

// Replace Omerta's favicon
$('<link rel="shortcut icon" type="image/x-icon"/>').appendTo('head').attr('href', GM_getResourceURL('favicon'));

// Replace Omerta's logo
$('#game_header_left').children('img').attr('src', GM_getResourceURL('logo'));
