import decode from 'jwt-decode';

class AuthService {
    getProfile():string | null {
        return decode(this.getToken());
    }
    
    /*Checks if there is a valid token*/
    loggedIn(): void | boolean {
        const token: any = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    /*Checks if token is expired*/
    isTokenExpired(token:string):boolean{
        try{
            const decoded :any = decode(token);
            if(decoded.exp < Date.now() / 1000){
                return true;
            } else return false;
        } catch(err){
            return false;
        }
    }

    getToken(): string | null {
        // Retrieves token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken:string){
        // saves token to localStorage
        localStorage.setItem('id_token', idToken);

        // routes to admin page
        window.location.assign('/#/admin')
    }

    logout(): void {
        // clear token from localStorage
        localStorage.removeItem('id_token');
        // reload page
        window.location.assign('/#');
    }
}