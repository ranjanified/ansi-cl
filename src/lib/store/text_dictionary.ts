export const get_replacement_text = (key: string, lang: string) => {
    if(text_dictionary[key]) {
        if(lang !== 'en') {
            return text_dictionary[key];
        }
    }
    return key;
}

const text_dictionary = {
    'and': 'और',
    'classes': 'कक्षाएं',
    'compilation': 'संकलन',
    'control':'संचालन',
    'data': 'तथ्य',
    'evaluation': 'निरूपण',
    'introduction': 'भूमिका',
    'iteration': 'आवर्तन',
    'recurrence': 'आवर्तन',
    'syntax': 'वाक्य - विन्यास',
    'types': 'प्रकार',
}