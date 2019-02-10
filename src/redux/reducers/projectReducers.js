const initialState = {
    projects:[
        {id:'1',title:'Iplix Netflix Clone With Reactnative Redux',content:'coba coba'},
        {id:'2',title:'Tracert Study Admin Mahasiswa With PHP Bootstrap',content:'coba coba3'},
        {id:'3',title:'Raport Sederhana With PHP Bootstrap',content:'coba coba2'}
    ]
}

const projectReducers = (state = initialState , action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project', action.err);
            return state;
        default:
            return state;
    }
    }

export default projectReducers;