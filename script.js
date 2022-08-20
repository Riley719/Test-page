function click(age){
    let a = ""
    var end = document.getElementById("end");
    if (age < 0){
        a = "生まれてないのかな？";
    } else if (0 <= age && age <20){
        a = "やーいこどもー";
    } else if (20 <= age){
        a = "大人です。";
    } else if (age.value && age.value.length){
    } else {
        a = "何を入力してんですか？";
    }
    end.innerHTML = a;
}