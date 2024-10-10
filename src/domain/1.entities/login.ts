export interface LoginProps {
    email: number;
    code: number;
    password:string;
    re_password:string;
}

export class Login {
    email: number;
    code: number;
    password:string;
    re_password:string;

    constructor(props: LoginProps) {
        this.email = props.email;
        this.code = props.code;
        this.password = props.password;
        this.re_password = props.re_password;
    }
}
