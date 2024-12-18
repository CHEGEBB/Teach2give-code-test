# Function to capitalize first letter of each word
def capitalize_words(text):
    # Split the string into list of words
    words = text.split()
    
    # Capitalize first letter of each word
    capitalized_words = [word.capitalize() for word in words]
    
    # Join words back together with spaces
    return " ".join(capitalized_words)

# Get input from user
text = input("Enter a string: ")

# Call function and print result
result = capitalize_words(text)
print(f"Result: {result}")