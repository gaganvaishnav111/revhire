package org.revature.revhire.entity;

public class AuthResponse {
    private String jwt;

    public AuthResponse(String jwt) {
        this.setJwt(jwt);
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    @Override
    public String toString() {
        return "AuthResponse [jwt=" + jwt + "]";
    }

}