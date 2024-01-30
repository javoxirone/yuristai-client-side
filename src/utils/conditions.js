export const conditions = [
    {
        regex : /^\S*$/,
        message : "bo'shliqlarga ruxsat berilmaydi!"
    },
    {
        regex : /^.{8,}$/,
        message : "Parolingiz kamida 8 ta belgidan iborat bo'lishi kerak!"
    },
    {
        regex : /(\D*\d){3,}\D*/,
        message : "Sizning parolingiz kamida 3 ta raqamdan iborat bo'lishi kerak!"
    },
    {
        regex : /([a-zA-Z].*){3,}/,
        message : "Parolingiz kamida 3 ta harfdan iborat bo'lishi kerak!"
    }
];