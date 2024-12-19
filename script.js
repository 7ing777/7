function searchFestival() {
    // 获取输入框内容
    const searchInput = document.getElementById("search-input").value.trim();
    const searchResults = document.getElementById("search-results");

    // 清空之前的搜索结果
    searchResults.innerHTML = "";

    // 定义节日页面映射关系
    const festivalPages = {
        "春节": "festivals/spring_festival.html",
        "元宵节": "festivals/lantern_festival.html",
        "清明节": "festivals/qingming_festival.html",
        "端午节": "festivals/dragon_boat_festival.html",
        "中秋节": "festivals/mid_autumn_festival.html"
        // 可继续添加其他节日
    };

    // 检查输入内容是否存在于映射中
    if (festivalPages[searchInput]) {
        // 跳转到对应的节日详细页面
        window.location.href = festivalPages[searchInput];
    } else {
        // 如果没有匹配，显示提示信息
        searchResults.innerHTML = `<p>未找到与 "${searchInput}" 相关的节日，请重新输入。</p >`;
    }
}

// 登录页面逻辑
if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const storedPassword = localStorage.getItem(username);

        if (!storedPassword) {
            alert("用户不存在，跳转到注册页面！");
            window.location.href = "register.html";
        } else if (storedPassword !== password) {
            document.getElementById("error-message").innerText = "密码错误，请重新输入！";
        } else {
            localStorage.setItem("currentUser", username);
            alert("登录成功！");
            window.location.href = "index.html";
        }
    });
}
// 登录按钮逻辑
const loginBtn = document.getElementById("login-submit");
if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 模拟存储的用户数据
        let users = JSON.parse(localStorage.getItem('users')) || {};

        if (!users[username]) {
            if (confirm("用户不存在，是否跳转注册？")) {
                users[username] = password; // 注册用户
                localStorage.setItem('users', JSON.stringify(users));
                alert("注册成功！请重新登录。");
                window.location.href = "login.html";
            }
        } else if (users[username] !== password) {
            alert("密码错误，请重新输入！");
        } else {
            // 登录成功，保存当前用户
            localStorage.setItem('currentUser', username);
            alert("登录成功！");
            window.location.href = "index.html"; // 跳转到首页
        }
    });
}

// 注册页面逻辑
if (document.getElementById("register-form")) {
    document.getElementById("register-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;
        let users = JSON.parse(localStorage.getItem('users')) || {};

        if (localStorage.getItem(newUsername)) {
            alert("用户名已存在，请直接登录！");
            window.location.href = "login.html";
        } else {

            localStorage.setItem(newUsername, newPassword);
            alert("注册成功，请登录！");
            window.location.href = "login.html";
        }
    });
}


// 模拟存储用户数据
let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = localStorage.getItem('currentUser');


// 随机播放照片
const photoElement = document.getElementById("random-photo");

// 照片列表（替换为你的图片路径）
const photoList = [
    'assets/images/spring_festival_bg.png',
    'assets/images/spring_festival_2.jpg',
    'assets/images/spring_festival_3.jpg',
    'assets/images/spring 3.jpg',
    'assets/images/qingming 2.jpg',
    'assets/images/qingming 1.jpg',
    'assets/images/qingming bg.jpg',
    'assets/images/mid_autumn_festival_bg.jpg',
    'assets/images/mid_autumn_festival_2.jpg',
    'assets/images/mid_antumn_featival.jpg',
    'assets/images/mid 3.jpg',
    'assets/images/lantern_3.jpg',
    'assets/images/lantern_2.jpg',
    'assets/images/lantern_1.jpg',
    'assets/images/dragon_bg.jpg',
    'assets/images/dragon_2.jpg',
    'assets/images/dragon_1.jpg',

];

// 定义随机播放函数
function playRandomPhoto() {
    // 随机选择图片索引
    const randomIndex = Math.floor(Math.random() * photoList.length);
    // 更换图片
    photoElement.src = photoList[randomIndex];
}

// 每隔 3 秒更换一次图片
setInterval(playRandomPhoto, 3000);

