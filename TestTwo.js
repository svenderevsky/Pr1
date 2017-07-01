// Статические методы и свойства
function Article() {
    Article.count++;
    this.localCount = 1;
}
Article.count = 0;
Article.showCount = function () {
    console.log(this.count);
}

t1 = new Article();
console.log(t1.localCount);

t2 = new Article();
console.log(t2.localCount);


Article.showCount();
