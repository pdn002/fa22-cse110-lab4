# Expose: part 2
1. Line 12 will print out 3, the ending index of the for loop in line 6. It can acces variable i because i has function scope and line 12 is still within the same function as line 6.
2. Line 13 will print 150, the last discounted price done in the for loop. It gets the last discounted price because line 13 executes after the loop finishes. Line 13 is able to access the variable because discountedPrice is declared var which has function scope and line 13 is still in the same function.
3. Line 14 will print 150, the last final price done in the for loop. Line 14 is able to access the variable because finalPrice is initialized using var which has function scope and line 14 is still in the same function.
4. The function returns [ 50, 100, 150 ]. The function return the contents inside the variable discounted. Discounted holds a list of prices after they are discounted. The function is able return this variable because it is initialized using var which has function scope and the return statement on line 18 is still in the same function.
5. Error. The variable i has block scope since it is initialized using let. Line 12 is not in the same block as the variable i so an error is caused.
6. Error. The variable discountedPrice has block scope since it is initialized using let. Line 13 is not in the same block as the variable discountedPrice so an error is caused.
7. Line 14 will print out 150. It is able to access the variable finalPrice because line 14 is in the same block scope as the initialization of the variable finalPrice
8. The function returns [ 50, 100, 150 ]. The function return the contents inside the variable discounted. Discounted holds a list of prices after they are discounted. The function is able return this variable because it is initialized using let which has block scope and the return statement on line 18 is still in the same block.
9. Error. The variable i has block scope since it is initialized using let. Line 12 is not in the same block as the variable i so an error is caused.
10. Line 12 will print out 3 which is the length of the pricess list. The variable length can be accessed because it has block scope and line 12 is in the same block. Length is also never changed after initialization so there is no error there either.
11. The function returns [ 50, 100, 150 ]. The function return the contents inside the variable discounted. Discounted holds a list of prices after they are discounted. The function is able return this variable because it is initialized using const which has block scope and the return statement on line 18 is still in the same block. <br>Interestingly, the list contents of discounted have been changed despite being initialized with the const keyword. My assumption of why this is possible is that the variable discount actually holds a memory address and that memory adress is never changed when new elements are added to the list.
12. - ```student["name"]```
    - ```student["Grad Year"]```
    - ```student["greeting"]();```
    - ```student["Favorite Teacher"]["name"]```
    - ```student["courseLoad"][0]```
13. - 32: integer maps to string and + becomes string cancatanation
    - 1: string maps to integer and - becomes subtraction
    - 3: null maps to integer 0 and + becomes addition
    - '3null': null maps to a string and + becomes string cancatanation
    - 4: true maps to integer 1 and + becomes addition
    - 0: false and null both map to integer 0 and + becomes addition
    - '3undefined': undefined gets maped as string and + becomes cancatanation
    - NaN: undefined maps to NaN and so entire expression evaluates to NaN
14. - true: '2' becomes integer 2 and 2 greater than 1
    - false: compares first character in string and 2 not greater than 1
    - true: '2' becomes integer 2 and 2 equal to 2
    - false: non type conversion and so intger not eual to string
    - false: true becomes integer 1 and 1 not equal to 2
    - true: boolean function evaluate 2 as true as true strictly equal 2
15. === is strict equality so it evaluate each side with any type conversion. So an integer can never equal a string with strict equality but i can with normal equality.
16. in part2-question16.js
17. Function will return [2,4,6]. The first line to be excuted is line 13 since everything else is a function declaration so far. The input is a list and the function doSomething. Inside the function the list is stored in array and the function doSomething is stored in callback. Inside the for loop the function is called on each index of the array. This will effectively double each value in the input array and the ouput will be the array of these new doubled values.
18. in part2-question18.js
19. 1 4 3 2
