package com.calc.matrix.matrix.controller;

import com.calc.matrix.matrix.model.Matrix;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class ControllerMatrixJson {
    @PostMapping("/calc")
    public double calcSum(@RequestBody Matrix matrix){
        double[] arr = matrix.getMatrix();


       return matrix.defineDeterminant(matrix.makeMatrix( arr));
    }

    @PostMapping("/calcmultiplymatrixonnumber")
    public double[] multiplyMatrixOnNumber(@RequestBody Matrix matrix){
        double [] res = new double[matrix.getMatrix().length - 1];
        for (int i = 0; i < res.length; i++) {
            res[i] = matrix.getMatrix()[i+1];
        }
        for (int i = 0; i <res.length ; i++) {
            res[i]*=matrix.getMultiplier();

        }
        return res;

    }

   @PostMapping("/sumtwomatrix")
    public double[] sumMatrix(@RequestBody Matrix matrix){

        double []result= new double[matrix.getMatrix().length];

       System.out.println( Arrays.toString(matrix.getMatrix()));
       System.out.println( Arrays.toString(matrix.getMatrix2()));

       for (int i = 0; i < result.length; i++) {
           result[i] = matrix.getMatrix()[i] + matrix.getMatrix2()[i];
       }
        return result;
   }

   @PostMapping("/multiplymatrix")
    public double[] multiplyMatrix(@RequestBody Matrix matrix){
        double [] result = matrix.multiplyMatrix();

        return result;
    }



}
