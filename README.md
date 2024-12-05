# MongoDB: Unexpected Behavior When Using $inc Operator on String Fields
This example demonstrates a common pitfall in MongoDB when working with the `$inc` operator and string fields. The `$inc` operator is designed for numerical fields, and using it with string fields leads to unexpected behavior rather than throwing errors. This can lead to subtle bugs that are difficult to detect.

## Bug Description
The code incorrectly uses the `$inc` operator on a string field.  This does not produce an error, but the result is not the intended numeric increment.  The behavior is dependent on the MongoDB version and may not be consistent across all versions.

## Solution
The solution involves ensuring that the field being incremented is of numeric type (e.g., NumberInt, NumberLong). If the field is intended to be stringified later for display, conversion should be done after the numerical increment is performed. 
