// 1 файл:
// объект со следующими свойствами:
// (1) переменная булевая. По умолчанию true
// (2) функция, изменяющая значение этой переменной и использующая для установки другую (следующую) функцию
// (3) функция (используемая), проверяющая, является ли переменная булевым значением, и в любом обратном случае возвращающая false
function Script1() {
	this.boolObject = true;
}

Script1.prototype.CallPrivateSetter = function(newValue) {	
    (function(context) {
		if (typeof(newValue) === "boolean") { 
			context.setBoolObject(newValue); 
		}	 
		else { 		
			context.setBoolObject(newValue);
		}
	})(this);
}

Script1.prototype.setBoolObject = function(newValue) {
    (function(context) {
		context.boolObject = newValue;
	})(this);
};

Script1.prototype.GetPrivateSetterResult = function() {	
    return (function(context) {
		if (typeof(context.boolObject) === "boolean") { 
			return context.boolObject; 
		} 
		else { 
			return false; 
		}
	})(this);
}
