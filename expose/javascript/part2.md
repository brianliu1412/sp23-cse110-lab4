1. Line 13 will print 3, because the for loop ends with i at 3. The loop condiiton checks if i < 3. Since 3 =3, the loop does not execute and the print statement is run
2. 150 is printed
3. 150 is also printed
4. [50,100,150] is returned because we take a 50 percent discount from each price and append it to a new array.
5. This code will cause an error because the variable i is out of scope at line 12.
6. This code will cause an error because the variable discountedPrice is out of scope at line 13.
7. The code will print the final price of 150, because the variable was declared in scope.
8. [50,100,150] is returned because the discounted variable is in scope.
9. The code will return an error because the variable i is out of scope.
10. Line 12 will print 3.
11. [50,100,150] will be printed
  
# Data Types #
2. Data Types
   1. student.name;
   2. student['Grad Year'];
   3. student.greeting();
   4. student['Favorite Teacher'].name;
   5. student.courseLoad[0]
# Basic Operators & Type Conversion #
3. Arithmetics
   1. '32' because ints are converted to string before addition
   2. JS cannot perform subtraction on string, so the string is converted to a number
   3. 3, null is treated as nothing
   4. '3null', null is converted into a string literal.
   5. 4, true is treated as the binary 1.
   6. 0, false is treated as binary 0 and null is also nothing.
   7. 3undefined, undefined is converted to a string
   8. NaN, cannot subtract undefined from string.
4. Comparison
   1. true, string is converted to a num.
   2. false, comparison of two strings compares addresses.
   3. true, string is converted to num.
   4. false, === always checks for same type
   5. false, converts true to 1, 1 != 2
   6. true, Boolean(2) evals to true
5. Explain the difference between the == and === operators.
   1. == is a loose equality because it can typecast to ensure variables are the same type before comparing. === will compare type and check type equality before checking value equality.
6. Code in part2-question16.js
7. The result will be [2,4,6]. This is because the callback takes the original array and pushes double of the value into a new array which is returned
8. Code in part2-question18.js
9. 1 4 3 appear instantly, and 2 appears last. 