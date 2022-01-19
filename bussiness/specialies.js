export function getWantToLearnList(topic, preparation) {
    const result = []
    topic.forEach(element => {
        result.push(element.id + 8);
    });
    preparation.forEach(item => {
        result.push(item.id);
    });
    return result;
}

export function getWantToLearnObject(data) {
    const result = {
        topic: [],
        preparation: []
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 9)
            result.preparation.push(data[i]);
        else
            result.topic.push(data[i] - 8);
    }
    return result;
}

export function getListLabel(listKey) {
    const result = [];
    listKey.forEach(item => {
        result.push(getSpecialiesLabel(item));
    })
    return result;
}

function getSpecialiesLabel(key) {
    const topic = itemsWantToLearn[0].children;
    for (let i = 0; i < topic.length; i++) {
        if (topic[i].key == key) {
            return topic[i].name
        }
    }
    const preparation = itemsWantToLearn[1].children;
    for (let i = 0; i < preparation.length; i++) {
        if (preparation[i].key == key) {
            return preparation[i].name;
        }
    }
    return '';
}

const itemsWantToLearn = [{
        name: 'Subjects',
        id: 'topics',
        children: [{
                "id": 11,
                "key": "english-for-kids",
                "name": "English for Kids"
            },
            {
                "id": 12,
                "key": "business-english",
                "name": "Business English"
            },
            {
                "id": 13,
                "key": "conversational-english",
                "name": "Conversational English"
            }
        ],
    },
    {
        name: 'Test Preparation',
        id: 'testPreparations',
        children: [{
                "id": 1,
                "key": "starters",
                "name": "STARTERS"
            },
            {
                "id": 2,
                "key": "movers",
                "name": "MOVERS"
            },
            {
                "id": 3,
                "key": "flyers",
                "name": "FLYERS"
            },
            {
                "id": 4,
                "key": "ket",
                "name": "KET"
            },
            {
                "id": 5,
                "key": "pet",
                "name": "PET"
            },
            {
                "id": 6,
                "key": "ielts",
                "name": "IELTS"
            },
            {
                "id": 7,
                "key": "toefl",
                "name": "TOEFL"
            },
            {
                "id": 8,
                "key": "toeic",
                "name": "TOEIC"
            }
        ],
    }
]