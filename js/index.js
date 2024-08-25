//nav IT技术对应页面侧边栏
const aside = document.querySelector(".aside");
aside.addEventListener('click',(e) => {
    const tagAs = aside.getElementsByTagName("a");
    for (const tagA in tagAs) {
        if (Object.hasOwnProperty.call(tagAs, tagA)) {
            const element = tagAs[tagA];
            element.classList.remove("isSelected");
        }
    }
    e.target.classList.add("isSelected");
});

//导航栏选中移除设置
const navDom = document.querySelector('.nav');
navDom.addEventListener('click',(e) => {
    const childOfNav = navDom.children;
    for (const child in childOfNav) {
        if (Object.hasOwnProperty.call(childOfNav, child)) {
            const element = childOfNav[child];
            element.classList.remove('selected');
        }
    }
    e.target.classList.add('selected');
});


//模态框的显示与隐藏
const styleModal = document.querySelector('.styleModeView');
const styleModal_a = styleModal.getElementsByTagName('a')[0];
const popoverModal = styleModal.getElementsByTagName('div')[0];
let isOpen = false;
// 打开模态框的函数
function openModal() {
    popoverModal.classList.remove('exitActiveted');
    popoverModal.classList.add('enterActiveted');
}

// 关闭模态框的函数
function closeModal() {
    popoverModal.classList.remove('enterActiveted');
    popoverModal.classList.add('exitActiveted');
}

// 监听模态框点击
styleModal.addEventListener('click', function(event) {
    event.stopPropagation(); // 阻止点击事件向上冒泡
    isOpen = !isOpen;
    if (isOpen === true) {
        openModal();
    } else {
        closeModal();
    }
});

// 监听document的点击事件
document.addEventListener('click', function() {
    isOpen = false;
    closeModal(); // 关闭模态框
});

//一个section中储存的内容
class UIITechData{
    constructor(itTechData){
        this.data = itTechData;
    }
}

//整个界面（包括多个section中储存的内容）数据
class UIITechDates{
    constructor(){
        let uiITechDateArry = [];
        for (let index = 0; index < itTechDates.length; index++) {
            const uiIttechDataObj = new UIITechData(itTechDates[index]);
            uiITechDateArry.push(uiIttechDataObj);
        }
        this.uiITechDateArry = uiITechDateArry;
    }
}

//整个内容界面 元素
class UI{
    constructor(){
        this.uiITechDateArry = new UIITechDates();//数据
        this.doms = {
            contentsView:document.querySelector('.contentsView'),
        };
        this.createElement();
    }

    //根据数据创建界面元素
    createElement(){
        let html = '';
        for (let index = 0; index < this.uiITechDateArry.uiITechDateArry.length; index++) {
            const obj = this.uiITechDateArry.uiITechDateArry[index];
            html += `<section class="articleView">
                    <h2><a href="">${obj.data.title}</a></h2>
                    <p>${obj.data.contents}</p>
                    <div>
                        <i class="iconfont icon-zuanshi zuanShiZhi">${obj.data.vip}</i>
                        <a href="" class="nickName">${obj.data.nickName}</a>
                        <a href=""><i class="iconfont icon-comment comment">${obj.data.Comments}</i></a>
                        <i class="iconfont icon-like like">${obj.data.like}</i>
                    </div>
                    </section>`;
        }
        this.doms.contentsView.innerHTML = html;
    }
}
new UI();
