// 2 файл:
// функция-конструктор объекта со следующими свойствами:
// функция, использующая функцию (2) из первого файла
// функция, возвращающая значение переменной (1) из первого файла
// Вся логика в файлах должна быть обёрнута в анонимные функции.
function Script2(newBoolValue) {	
    this.boolObject = newBoolValue;	
	this.Script1Field = new Script1();
}

Script2.prototype.CallScript1Setter = function() {
	(function(context) {
		context.Script1Field.CallPrivateSetter(context.boolObject);
	})(this);
}

Script2.prototype.Getter = function() {	
	return (function(context) {
		return context.Script1Field.GetPrivateSetterResult();
	})(this);
}
