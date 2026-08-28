class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // let anagram = true;

        // if (s.length && t.length && (s.length != t.length)) {
        //     anagram = false;
        // } else if (s.length == 1 && t.length == 1) {
        //     anagram = (s == t);
        // } else {
        //     let charObj = {};

        //     for (let ittr = 0 ; ittr < s.length ; ittr++) {
        //         if (!charObj[s[ittr]]) {
        //             charObj[s[ittr]] = 1;
        //         } else {
        //             charObj[s[ittr]] = charObj[s[ittr]] + 1;
        //         }
        //     }

        //     for (let ittr = 0 ; ittr < t.length ; ittr++) {
        //         if (!charObj[t[ittr]]) {
        //             anagram = false;
        //             break;
        //         } else {
        //             if (charObj[t[ittr]] == 1) {
        //                 delete charObj[t[ittr]];
        //             } else {
        //                 charObj[t[ittr]] = charObj[t[ittr]] - 1;
        //             }
        //         }
        //     }

        //     anagram = Object.keys(charObj).length == 0;
        // }

        // return anagram;

        if (s.length !== t.length) return false;

        const count: Record<string, number> = {};

        for (const char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (const char of t) {
            if (!count[char]) return false;
            count[char]--;
        }

        return true;

    }
}
