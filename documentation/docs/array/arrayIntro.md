---
id: arrayIntro
title: Introductio to Array
---

An array is a basic data structure to store a collection of elements sequentially. But elements can be accessed randomly since each element in the array can be identified by an array index.

An array can have one or more dimensions. Here we start with the one-dimensional array, which is also called the linear array. Here is an example:

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/20/screen-shot-2018-03-20-at-191856.png)

In the above example, there are 6 elements in array A. That is to say, the length of A is 6. We can use A[0] to represent the first element in the array. Therefore, A[0] = 6. Similarly, A[1] = 3, A[2] = 8 and so on.


Operations in Array
Let's take a look at the usage of the array.

<Tabs>
  <TabItem value="C++" label="CPP" default>

```cpp title=Array
#include <iostream>

int main() {
    // 1. Initialize
    int a0[5];
    int a1[5] = {1, 2, 3};  // other element will be set as the default value
    // 2. Get Length
    int size = sizeof(a1) / sizeof(*a1);
    cout << "The size of a1 is: " << size << endl;
    // 3. Access Element
    cout << "The first element is: " << a1[0] << endl;
    // 4. Iterate all Elements
    cout << "[Version 1] The contents of a1 are:";
    for (int i = 0; i < size; ++i) {
        cout << " " << a1[i];
    }
    cout << endl;
    cout << "[Version 2] The contents of a1 are:";
    for (int& item: a1) {
        cout << " " << item;
    }
    cout << endl;
    // 5. Modify Element
    a1[0] = 4;
    // 6. Sort
    sort(a1, a1 + size);
}
```

  </TabItem>
</Tabs>