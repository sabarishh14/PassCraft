import Rule from "./Rule";
import RuleWordle from "./RuleWordle/RuleWordle";
import RuleSlidingPuzzle from "./RuleSlidingPuzzle/RuleSlidingPuzzle";
import RuleMorse from "./RuleMorse/RuleMorse";
import RuleRiddle from "./RuleRiddle/RuleRiddle";
import RuleLocation from "./RuleLocation/RuleLocation";
import RuleTimeEmoji from "./RuleTimeEmoji/RuleTimeEmoji";
import RuleQR from "./RuleQR/RuleQR";
import RuleSum from "./RuleSum/RuleSum";
import RuleEarthquake from "./RuleEarthquake/RuleEarthquake";
// Get today's date in DDMMYY format
const today = new Date();
const day = String(today.getDate()).padStart(2, '0'); // Get day with leading zero
const month = String(today.getMonth() + 1).padStart(2, '0'); // Get month with leading zero
const year = String(today.getFullYear()).slice(-2); // Get last two digits of the year

const formattedDate = day + month + year; // Combine to form DDMMYY


var rules = [
    new Rule( 
        "Your password must be at least 6 characters.",
        (t) => t?.length >= 6
    ),  
    new Rule( 
        "Your password must include an uppercase and a lowercase letter.",
        (t) => (/[A-Z]/.test(t) && /[a-z]/.test(t))
    ),
    new Rule( 
        "Your password must include a special character.",
        (t) => /\W/.test(t)
    ),
    new Rule( 
        "Your password must include a negative number.",
        (t) => /-\d/.test(t)
    ),
    new Rule( 
        "Your password must contain all the english vowels.",
        (t) => /a/i.test(t) && /e/i.test(t) && /i/i.test(t) && /o/i.test(t) && /u/i.test(t)
    ),
    new Rule( 
        "Your password must mention the HTTP status code for 'Not Found'", 
        (t) => /(?:404)/i.test(t)
    ),
    new Rule(
        "Your password must include 2-digit prime number.",
        (t) => /(?:11)|(?:13)|(?:17)|(?:19)|(?:23)|(?:29)|(?:31)|(?:37)|(?:41)|(?:43)|(?:47)|(?:53)|(?:59)|(?:61)|(?:67)|(?:71)|(?:73)|(?:79)|(?:83)|(?:89)|(?:97)/.test(t)
    ),
    new RuleSum(),
   // Rule for including today's date
    
    new Rule( 
        "Your password must include the name of \'the main event you are attending now\' \u{1F50D}",
        (t) => /(?:cypherchase)|(?:invente)|(?:cypher chase )|(?:[passcraft] )|(?:passcraft)/i.test(t)
    ),
    new Rule( 
        "Your password must include an attack where hackers overload a system with traffic", 
        (t) => /(?:ddos)|(?:distributed denial of service)|(?:distributeddenialofservice)|(?:dos)|(?:denial of service)|(?:denialofservice)/i.test(t)
    ),
    new Rule( 
        "Your password must contain a security feature that requires two forms of authentication.", 
        (t) => /(?:2fa)|(?:two factor authentication)|(?:twofactorauthentication)/i.test(t)
    ),
    new Rule( 
        "Your password must include the name of a continent.",
        (t) => /asia|europe|africa|australia|oceania|north america|south america|antarctica/i.test(t)
    ),
    new Rule( 
        "Your password must include the year of birth of the college's founder",
        (t) => /(?:1945)/.test(t)),
    new Rule(
        "Your password must include the first 5 numbers of the Fibonacci sequence.",
        (t) => /(?:0.*1.*1.*2.*3)/.test(t)), 
           
    new Rule( 
        "Your password must contain the value of pi up to the first 3 decimal places.",
        (t) => /(?:3\.141|3\.142)/.test(t)
    ),     
    new RuleTimeEmoji(),
    new Rule(
        `Your password must contain today's date in DDMMYY format.`,
        (t) => t.includes(formattedDate)
    ),
    new RuleQR(),
    new RuleMorse(), 
    new RuleLocation(),
    new Rule(
        "Your password must include a valid IPv4 address. Give space before IP address.",
        (t) => /(?:\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(t)
    ),  
    new RuleRiddle(),
    new Rule(
        "Your password must have as many vowels as consonants.",
        (t) => (t.match(/[aeiou]/ig) || []).length === (t.match(/[bcdfghjklmnpqrstvwxyz]/ig) || []).length
    ),
    new RuleSlidingPuzzle(),
    new Rule(
        "Your password must include the length of your password.",
        (t) => {
            let l = t.length;
            let r = new RegExp(`${l}`);
            return r.test(t);
        }
    )
];

function sort_rules(a, b){
    if(a.correct == b.correct){
        return b.num - a.num;
    }
    else if(!a.correct && b.correct){
        return -1;
    }
    else{
        return 1;
    }
}

export default rules;
export {sort_rules};