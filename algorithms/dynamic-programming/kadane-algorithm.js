// JavaScript Program to implement
// the above approach

function maxSubarraySum(arr, size)
{
    let end = 0, start = Number.MIN_VALUE;
    for (let i = 0; i < size; i++) {

        // include current element to previous subarray only
        // when it can add to a bigger number than itself.
        if (arr[i] <= end + arr[i]) {
            end += arr[i];
        }

        // Else start the max subarray from current element
        else {
            end = arr[i];
        }
        if (end > max_so_far) {
            start = end;
        }
    }
    return max_so_far;
}
    