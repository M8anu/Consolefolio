$(window).on('load', function() {
    "use strict";

    /*=========================================================================
        Theme Toggling
    =========================================================================*/
    window.toggleThemes = function(change = true){
      var $theme = localStorage.getItem('theme') || 'light';
      var $alttheme = ($theme === 'light')?('white'):('dark');
      var $newtheme = ($theme === 'light')?('dark'):('light');
      var $altnewtheme = ($theme === 'light')?('dark'):('white');
      if (!change) {
        $newtheme = $theme;
        $altnewtheme = $alttheme;
        $theme = 'light';
        $alttheme = 'white';
      }
      var $elt = $('.'+$theme);
      var $bgelt = $('.bg-'+$alttheme);
      var $shadowelt = $('.shadow-'+(($theme === 'light')?('dark'):('light')));
      $elt.toggleClass($newtheme);
      $elt.toggleClass($theme);
      $bgelt.toggleClass('bg-'+$altnewtheme);
      $bgelt.toggleClass('bg-'+$alttheme);
      $shadowelt.toggleClass('shadow-'+(($newtheme === 'light')?('dark'):('light')));
      $shadowelt.toggleClass('shadow-'+(($theme === 'light')?('dark'):('light')));
      localStorage.setItem('theme', $newtheme);
    }
    window.toggleThemes(false);

    /*=========================================================================
        Preloader
    =========================================================================*/
    $("#preloader").delay(350).fadeOut('slow');
    // Because only Chrome supports offset-path, feGaussianBlur for now
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if(!isChrome) {
        document.getElementsByClassName('infinityChrome')[0].style.display = "none";
        document.getElementsByClassName('infinity')[0].style.display = "block";
    }

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }

    /*=========================================================================
     Background Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-background');

     for (var i = 0; i < list.length; i++) {
       var color = list[i].getAttribute('data-color');
       list[i].style.backgroundColor = "" + color + "";
     }
});

var config = {
  "title": "M8anu's Consolefolio  ",
  "prompt": "you@m8anus-site:/ $",
  "commands": [
    {
      "name": "about",
      "syntax": "about [manu|life|experience|skills|upcoming learning|projects]",
      "description": "get to know me a bit more :)",
      "exec": "about",
      "data": {
        "manu": "Hi! I am Manu(M8anu/M1ndbl0w on the Internet), junior Software Engineer, passionate about repairing machines of every kind and looking for work! If you want to get to know me a bit more, enter `help about`.\n",
        "life": "The journey of this little human alongside technology starts in 2005. When for his 7th birthday he was gifted a PlayStation2.\nHe did not knew, but from there on, his appetite on technology and its surroundings did nothing but growing more and more. And here he is writing these lines in 3rd person perspective, such writing talent, wow.\nWhatsoever, thank you Bidridi and Ma for opening me up to this amazing world, forever yours from these lines to beyond.........\n",
        "experience": "-UMA Student Residence Internship\nNetwork and Wi-Fi installation Intern.\nMalaga, SPA.\nJune 2017 – Aug 2017\nDeveloped the installation of the gateway, switches rack, cabling, VoIP Telephone Network installation and Wi-Fi Ubiquiti access points, conforming a solid and stable Mesh Internet Network.\nAs part of making the theoretical End Of Studies Project of my colleagues Melchor and Antonio a reality.\n\n-Vicerrectorado Smart-Campus, University of Malaga\nWeb Content Manager and Server Administrator + Event/Activities Moderator + Web App Developer\nMalaga, SPA.\nNov 2020 – May 2021\nMigrated the whole vicerrectorado content from a Joomla managed site to the new Merengue managed university.\nPublished and edited all the information concerning news and events from the vicerrectorado.\nApplied styles and added customization to the site: https://www.uma.es/smart-campus.\nDeveloped a Web Application, an interactive map with all POT of UMA\'s Campus: http://osm.uma.es/mapa.\n\n",
        "skills": "\n * Human Values: constant effort, teamworking, respect, empathy, loyalty, perseverance, always willing to learn and improve, love.\n\n * Speaking: B2 Cambridge FCE in English in 2014, currently native level both reading and speaking; fluent in French(currently preparing for language exam).\n\n * Custom Videogaming-Modding: Retropie, PC-Building, PC-Budgeting, Console Tweaking, OS Modelling and Customization.\n\n * Web Development: Django(average), JSP, JSF, HTML5, CSS, JavaScript, RESTful API, Node.js, React, React Native(beginner), Wordpress.\n\n * Mobile Development: Android(both framework and app develompent), Flutter(beginner), Responsive design.\n\n * Languages: C++, Python, C, Java 8(lol how many updates), JavaScript, jQuery(this project), MATLAB, HTML, CSS, Bash, ARM assembly language(some projects on RaspberryPi Environment), Python, Typescript(beginner).\n\n * Software Modelling: USE, UML, MagicDraw, Alloy, Promela.\n\n * Other, non specific: Server administration and networking(both installation and management, strong SQL knowledge). Even if I don\'t know about something, in case I\'d need it, SAPERE AUDE!\n\n",
        "upcoming learning": "Flutter(Dart), Cobol, more Typescript, noSQL(in general), 4th Speaking language(surely Japanese).\n",
        "projects": "A summarised list of projects I\'ve done: \n * GitHub Things:\n - MiShellObama, a basic Linux Bash(from which this idea comes from), it does implement basic commands alongside signal management(i.e. SIGCHLD), further reading accessing the link: https://github.com/M8anu/MiShellObama.\n\n - g0d_4b4nd0n3d_us, sound enabled web-console with an excerpt of an episode of Mr Robot TV series. The speech of Elliot about God made a little cybercreepy, it impacted me very much the first time I heard it, I don\'t endorse his opinions, but share some views, access it reaching https://m8anu.github.io/g0d_4b4nd0n3d_us/ \n\n\n * Hardware related projects:\n - Retropie Console RPi3B powered: Using a Raspbian custom build in order to run in top of it a Retropie based Emulation Station in which you can play games from Atari2600 to Nintendo DS, plus the 3D concept and design of the actual console.\n\n - FreedomBox private server RPi4B powered: A private smart server running on the Open Source Debian powered FreedomBox toolset, which allows the user to decentralize many services from the mainstream ones.\n\n - Damaged PS4 fixing: A friend was gonna throw away his faulty PS4, asked him for it in case I could revive it. Just needed some connexions to be welded back and a deep clean plus fan replacement.\n\n - Budgeting and building my actual Desktop PC: Crazy machine that still runs smooth today in whichever thing I do, this July is going 7 years old.\n\n\ "
      }
    },
    {
      "name": "clear",
      "syntax": "clear",
      "description": "clear terminal output history",
      "exec": "clear",
      "data": null
    },
    {
      "name": "contact",
      "syntax": "contact [phone|telegram|email|resume]",
      "description": "this is how you can get in touch with me",
      "exec": "contact",
      "data": {
        "phone": ["tel:+34644926840", "Click to call me."],
        "telegram":["https://t.me/Mindbl0w", "Send me a Telegram message!"],
        "email": ["mailto:m8anu@workmail.com", "m8anu@workmail.com"],
        "resume": ["","Download my professional resume in .pdf format" ]
      }
    },
    {
      "name": "dark",
      "syntax": "dark on|off",
      "description": "turn on or off the dark mode appearance",
      "exec": "dark",
      "data": null
    },
    {
      "name": "help",
      "syntax": "help [command]",
      "description": "show a complete list of available commands",
      "exec": "help",
      "data": null
    },
    {
      "name": "social",
      "syntax": "social [github|reddit|twitter]",
      "description": "display my social links",
      "exec": "social",
      "data": {
        "M8anu @ github": "https://github.com/M8anu",
        "ManuDoon @ reddit": "https://www.reddit.com/user/ManuDoon/",
        "_M1ndbl0w @ twitter": "https://www.twitter.com/_M1ndbl0w"
      }
    }
  ]
}

var hist = $('#history');
var command = $('#command');
var prompt = $('#prompt');
var cmdInpt = $('#cmd-input');
var cmdHist = [];
var currPos = 0;
var key = {};
var theme = localStorage.getItem('theme') || 'light';
function appendToHist(str) {
  hist.append(`<pre class='${theme}'>${str}\n</pre>`)
}
appendToHist(`Welcome to ${config.title}!\nType 'help' and hit ENTER for more information.\n`);
prompt.html(`${config.prompt} `);
cmdInpt.focus();

cmdInpt.on('keypress', function(e){
  if (e.which == 13) {
    handleCommand();
  }
})

function test_key(selkey){
  var alias = {
    "ctrl": 17,
    "shift": 16,
    "up": 38,
    "down": 40,
    "a": 65,
    "c": 67,
    "d": 68,
    "e": 69,
    "l": 76
  };

  return key[selkey] || key[alias[selkey]];
}

function test_keys(){
  var keylist = arguments;
  for(var i = 0; i < keylist.length-1; i++) {
    if(!test_key(keylist[i])) {
      return false;
    }
  }
  keylist[keylist.length-1].preventDefault();
  return true;
}

cmdInpt.on('keydown', function(e){
  
  key[e.keyCode] = true;
  cmdInpt.focus();
  if (test_keys('ctrl', 'a', e)) {
    moveToBeginning();
  } else if (test_keys('ctrl', 'c', e)) {
    breakCmd();
  } else if (test_keys('ctrl', 'd', e)) {
    window.location = '/';
  } else if (test_keys('ctrl', 'e', e)) {
    moveToEnd();
  } else if (test_keys('ctrl', 'l', e)) {
    clear();
  } else if (test_keys('up', e)) {
    prevHist();
  } else if (test_keys('down', e)) {
    nextHist();
  }
})
cmdInpt.on('keyup', function(e){
  key[e.keyCode] = false;
  if (test_keys('ctrl', 'a', e) ||
    test_keys('ctrl', 'c', e) ||
    test_keys('ctrl', 'd', e) ||
    test_keys('ctrl', 'e', e) ||
    test_keys('ctrl', 'l', e) ||
    test_keys('up', e) ||
    test_keys('down', e)) {
    e.preventDefault();
  }
})

function prevHist() {
  if (currPos > 0) {
    currPos -= 1;
    cmdInpt.val(cmdHist[currPos]);
  }
}

function nextHist() {
  if (currPos < cmdHist.length) {
    currPos += 1;
    cmdInpt.val(cmdHist[currPos]);
  } else {
    cmdInpt.val('');
  }
}

function moveToBeginning() {
  if (cmdInpt[0].createTextRange) {
    var part = cmdInpt[0].createTextRange();
    part.move("character", 0);
    part.select();
  } else if (cmdInpt[0].setSelectionRange) {
    cmdInpt[0].setSelectionRange(0, 0);
  }
}

function moveToEnd() {
  var cmd = cmdInpt.val();
  cmdInpt.val('');
  cmdInpt.val(cmd);
}

function breakCmd() {
  if (cmdInpt.val()) {
    appendToHist(`${config.prompt} ${cmdInpt.val()}^C`);
    cmdInpt.val('');
  }
}

function handleCommand() {
  if (cmdInpt.val()) {
    appendToHist(`${config.prompt} ${cmdInpt.val()}`);
    cmdHist.push(cmdInpt.val());
    currPos = cmdHist.length;
    var args = cmdInpt.val().replace(/[^a-z0-9\s]/gi, '').toLowerCase().split(' ');
    var cmd = _getCmdByName(args[0]);
    if (cmd) {
      window[cmd.exec](args, cmd.data);
    } else {
      unknown(args);
    }
  }
  cmdInpt.val('');
  cmdInpt.focus();
  $('#bottom')[0].scrollIntoView({block: "end", behavior: "smooth"});
}

function _getCmdByName(name) {
  for (let cmd of config.commands) {
    if (name == cmd.name) {
      return cmd;
    }
  }
  return;
}

function about(args, data) {
  var outStr = '';
  if (args.length <= 1) {
    outStr += data['manu'];
  } else {
    var cmdStr = args.splice(1).join(" ");
    if (data.hasOwnProperty(cmdStr)) {
      outStr += data[cmdStr]
    } else {
      outStr += `UNKNOWN ARGUMENT: ${cmdStr}\n`
    }
  }
  appendToHist(outStr);
}

function clear(_args, _data) {
  hist.html('');
}

function contact(args, data) {
  var outStr = '';
  if (args.length <= 1) {
    outStr += 'These are the ways you can get in touch with me:\n'
    for (let way of Object.values(data)) {
      outStr += ` * <a href="${way[0]}">${way[1]}</a>\n`;
    }
  } else {
    var cmdStr = args.splice(1).join(" ");
    if (data.hasOwnProperty(cmdStr)) {
      outStr += `You can get in touch with me by: <a href="${data[cmdStr][0]}">${data[cmdStr][1]}</a>\n`;
    } else {
      outStr += `UNKNOWN ARGUMENT: ${cmdStr}\n`
    }
  }
  appendToHist(outStr);
}

function dark(args, _data) {
  var outStr = '';
  if (args.length <= 1) {
    outStr += `EXPECTED ARGUMENT: on|off\n`
  } else {
    var cmdStr = args.splice(1).join(" ");
    if (cmdStr == 'on') {
      if (theme != 'dark') {
        window.toggleThemes();
        outStr += 'Dark Mode now: ON'
      } else {
        outStr += 'Dark Mode already ON'
      }
    } else if (cmdStr == 'off') {
      if (theme != 'light') {
        window.toggleThemes();
        outStr += 'Dark Mode now: OFF'
      } else {
        outStr += 'Dark Mode already OFF'
      }
    } else {
      outStr += `UNKNOWN ARGUMENT: ${cmdStr}\n`
    }
    theme = localStorage.getItem('theme') || 'light'
  }
  appendToHist(outStr);
}

function help(args, _data) {
  var outStr = '';
  if (args.length <= 1) {
    // outStr += 'M8anu\'s Site Terminal HELP\n========================\n';
    for (let cmd of config.commands) {
      outStr += cmd.name + '\t' + cmd.description + '\n';
    }
    outStr += 'To find more about a certain command, enter `help [command]`\n';
  } else {
    var cmdStr = args.splice(1).join(" ");
    // outStr += `COMMAND ${cmdStr} HELP\n========================\n`;
    var cmd = _getCmdByName(cmdStr);
    if (cmd) {
      outStr += `USAGE: ${cmd.syntax}\n`;
    } else {
      outStr += `UNKNOWN ARGUMENT: ${cmdStr}\n`;
    }
  }
  appendToHist(outStr);
}

function social(args, data) {
  var outStr = '';
  if (args.length <= 1) {
    outStr += 'You can follow me on:\n'
    for (medium in data) {
      if (data.hasOwnProperty(medium)) {
        outStr += ` * <a href="${data[medium]}">${medium}</a>\n`;
      }
    }
  } else {
    var cmdStr = args.splice(1).join(" ");
    if (data.hasOwnProperty(cmdStr)) {
      outStr += `You can follow me on ${cmdStr} <a href="${data[cmdStr]}">here</a>\n`;
    } else {
      outStr += `UNKNOWN ARGUMENT: ${cmdStr}\n`
    }
  }
  appendToHist(outStr);
}

function unknown(args, _data) {
  appendToHist(`UNKNOWN COMMAND: ${args.join(' ')}`);
}