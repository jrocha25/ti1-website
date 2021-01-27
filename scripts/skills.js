function moveLinux() {
    var linuxSkillBar = document.getElementById("linux-skill");
    linuxSkillBar.percent = 80;
    linuxSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= linuxSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                linuxSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                linuxSkillBar.className = "w3-red";
            }
        width++; 
        linuxSkillBar.style.width = width + '%';
      }
    }
  }

function movePython() {
    var pythonSkillBar = document.getElementById("python-skill");
    pythonSkillBar.percent = 50;
    pythonSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= pythonSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                pythonSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                pythonSkillBar.className = "w3-red";
            }
        width++; 
        pythonSkillBar.style.width = width + '%';
        }
    }
}

function moveMysql() {
    var mysqlSkillBar = document.getElementById("mysql-skill");
    mysqlSkillBar.percent = 70;
    mysqlSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= mysqlSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                mysqlSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                mysqlSkillBar.className = "w3-red";
            }
        width++; 
        mysqlSkillBar.style.width = width + '%';
        }
    }
}

function moveCpp() {
    var cppSkillBar = document.getElementById("cpp-skill");
    cppSkillBar.percent = 40;
    cppSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= cppSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                cppSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                cppSkillBar.className = "w3-red";
            }
        width++; 
        cppSkillBar.style.width = width + '%';
        }
    }
}

function moveCsharp() {
    var csharpSkillBar = document.getElementById("csharp-skill");
    csharpSkillBar.percent = 30;
    csharpSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= csharpSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                csharpSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                csharpSkillBar.className = "w3-red";
            }
        width++; 
        csharpSkillBar.style.width = width + '%';
        }
    }
}

function moveJs() {
    var jsSkillBar = document.getElementById("js-skill");
    jsSkillBar.percent = 80;
    jsSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= jsSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                jsSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                jsSkillBar.className = "w3-red";
            }
        width++; 
        jsSkillBar.style.width = width + '%';
        }
    }
}

function moveDocker() {
    var dockerSkillBar = document.getElementById("docker-skill");
    dockerSkillBar.percent = 60;
    dockerSkillBar.className = "w3-blue";

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= dockerSkillBar.percent) {
        clearInterval(id);
        } else {
            if (width > 40){
                dockerSkillBar.className = "w3-yellow";
            }
            if (width > 65){
                dockerSkillBar.className = "w3-red";
            }
        width++; 
        dockerSkillBar.style.width = width + '%';
        }
    }
}

function moveBars(){
    moveLinux();
    movePython();
    moveMysql();
    moveCpp();
    moveCsharp();
    moveJs();
    moveDocker();
}