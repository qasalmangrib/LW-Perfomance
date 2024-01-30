import http from 'k6/http';
import { sleep,check } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target:100 }, // ramp up
        { duration: '30s', target:100 }, // stable
        { duration: '30s', target:0 }, // ramp down to 0
    ],
};

export default () => {
    const res =  http.get('https://edu-cat.com.my/student/a0d7092d0b394701a945/edit')
    check(res, {"response code was 200": (res) => res.status == 200,});    
    sleep(3);
};