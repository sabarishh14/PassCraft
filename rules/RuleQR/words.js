const words = [
    'absorbent', 'accepting', 'accessory', 'admirable', 'admission', 
    'advisable', 'affection', 'afterward', 'alignment', 'alligator', 
    'alterable', 'alternate', 'amplitude', 'anecdotal', 'apparatus', 
    'appliance', 'appraisal', 'assistant', 'attention', 'attribute', 
    'authority', 'beautiful', 'beginning', 'belonging', 'brilliant', 
    'brotherly', 'candidate', 'capacity', 'challenge', 'character', 
    'chemistry', 'chocolate', 'committed', 'community', 'composure', 
    'computing', 'connector', 'corrosion', 'creativity', 'dangerous', 
    'delicious', 'dimension', 'direction', 'directory', 'discovery', 
    'distorted', 'economics', 'effective', 'efficient', 'elevating', 
    'elsewhere', 'engagement', 'equipment', 'evolution', 'excitable', 
    'expansion', 'extensive', 'fascinate', 'fortunate', 'framework', 
    'frequency', 'generally', 'generation', 'gentleman', 'government', 
    'happiness', 'household', 'important', 'incapable', 'incorrect', 
    'inference', 'influence', 'ingredient', 'injection', 'invisible', 
    'irrigated', 'landscape', 'leadership', 'legendary', 'literally', 
    'marketing', 'measuring', 'mechanism', 'memorable', 'messenger', 
    'migration', 'moderator', 'necessary', 'neglected', 'negotiate', 
    'objective', 'obligated', 'operation', 'opponent', 'optimistic', 
    'organized', 'otherwise', 'overcomes', 'overdrive', 'overgrown', 
    'passenger', 'perceived', 'permanent', 'personnel', 'photograph', 
    'political', 'preceding', 'president', 'prevalent', 'principle', 
    'probation', 'professor', 'promotion', 'protective', 'reception', 
    'recurrent', 'reduction', 'reference', 'reflector', 'relevance', 
    'reporting', 'represent', 'resolution', 'respective', 'retention', 
    'reviewing', 'selection', 'signature', 'specialty', 'statement', 
    'structure', 'successful', 'suffering', 'supplying', 'treatment', 
    'threshold', 'translate', 'transport', 'underwear', 'undertake', 
    'vacations', 'variation', 'vegetable', 'violating', 'wilderness', 
    'wonderful', 'workplace'
];


export default function getRandomWord(){
    return words[Math.floor(Math.random()*(words.length+1))];
}