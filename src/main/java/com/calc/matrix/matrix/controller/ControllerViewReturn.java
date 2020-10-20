package com.calc.matrix.matrix.controller;

import com.calc.matrix.matrix.model.Matrix;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ControllerViewReturn {


    @GetMapping("/")
    public String mainPage() {
        return "mainPage";
    }


    @GetMapping("/determinant")
    public String showMat() {
        return "pageDeterminant";
    }

    @GetMapping("/matrixmultiplyonnumber")
    public String matrixMultiplyOnNumberView(){
        return "matrixMultiplyOnNumber";
    }

    @GetMapping("/twomatrixsum")
    public String sumTwoMatrix(){
        return "twoMatrix.html";
    }

    @GetMapping("/multiplymatrix")
    public String multiply() {
        return "multiplyMatrix";
    }

    @GetMapping("/login")
    public String loginForm(){
        return "login";
    }

}
