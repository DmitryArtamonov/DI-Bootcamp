import inspect
import random

# Get the source code of the random module
source_code = inspect.getsource(random)

# Print the source code
print(source_code)
