object ScalaExample{
    def main(args:Array[String]){
        println("Hello Scala")
        //You can create mutable variable using var keyword. It allows you to change value after declaration of variable.
        var data = 100
        data = 101  // It works, No error.
        var num = 100 // This is a declaration of an immutable variable, which is done with the keyword val.
        num = 101 //would result in an error because num is immutable.
        print(data)
        print(num)
    }
}
