---
id: print
title: print() in Python
---

The `print()` function in Python is used to output messages to the screen or any other standard output device.

### Syntax:

```python title=print.py
print(value(s), sep=' ', end='\n', file=file, flush=flush)
```

### Parameters:
  - **value(s)**: Any value(s) you wish to print. These values will be converted to a string before being printed.
  - **sep**: (Optional) Specifies the separator between multiple values. Default is a space `' '`.
  - **end**: (Optional) Specifies what to print at the end. Default is a newline `'\n'`.
  - **file**: (Optional) An object with a write method. Default is `sys.stdout`.
  - **flush**: (Optional) A boolean indicating if the output should be flushed immediately (`True`) or buffered (`False`). Default is `False`.

### Return Type:
The `print()` function does not return a value; it outputs the specified message to the screen or other standard output.

## Key Points:
  - **No Arguments Required**: The `print()` function can be called without any arguments, but it requires empty parentheses to indicate a function call.
  - **String Literals**: Used for formatting the output.
    - `\n`: Adds a new line.
    - `""`: Prints an empty line.

## Examples:

### Basic Usage:

:::sourcecode
```python title=print.py
print("Welcome to PrepVerse")
```
```cpp title=Output
Welcome to PrepVerse
```
:::

### Using `\n` for New Lines:

:::sourcecode
```python title=print.py
print("PrepVerse \nLearn Python Easily")
```
```cpp title=Output
PrepVerse 
Learn Python Easily
```
:::

### Using `end` to Control End Character:
By default, `print()` ends with a newline character. You can change this using the `end` parameter.

:::sourcecode
```python title=print.py
# Default behavior
print("Welcome to PrepVerse")
print("Learn Python")

# Custom end character
print("Welcome to PrepVerse", end=" ** ")
print("Learn Python")
```
```cpp title=Output
Welcome to PrepVerse
Learn Python
Welcome to PrepVerse ** Learn Python
```
:::

### Using `sep` to Control Separator:
When printing multiple values, the default separator is a space. You can change this using the `sep` parameter.

:::sourcecode
```python title=print.py
print("Python", "is", "fun", sep="-")
```
```cpp title=Output
Python-is-fun
```
:::

## Conclusion

The `print()` function is versatile and allows various customizations for output formatting. Understanding its parameters and how to use them effectively can significantly enhance the way you display information in Python.