package com.calc.matrix.matrix.model;


public class Matrix {


    private double[] matrix;

    private double[] matrix2;

    private int multiplier;


    public  double defineDeterminant(double[][] matrix){
        double result = 0;
        if(matrix.length == 2){


            result =  ((matrix[0][0]*matrix[1][1]) -(matrix[0][1]*matrix[1][0]));
        }
        else{
            int coefficient=1;
            for(int i=0; i<matrix.length; i++){
                if(i%2==1){
                    coefficient=-1;
                }
                else{
                    coefficient=1;
                };

                result += coefficient*matrix[0][i]*defineDeterminant( getMinor(matrix,0,i));
            }
        }
        return  result;
    }

    public  double[][] getMinor(double[][] matrix, int row, int column){
        int minorLength  = matrix.length -1;
        double [][] minor = new double[minorLength][minorLength];
        int skipI = 0;
        int skipJ = 0;

        for (int i = 0; i < minorLength;i++){
            if(i == row)
                skipI = 1;
            skipJ = 0;
            for (int j = 0;j < minorLength;j++){
                if(j == column){
                    skipJ = 1;
                }
                minor[i][j] = matrix[i+skipI][j+skipJ];
            }
        }
        return minor;
    }

    public   double [][]makeMatrix(double[] srcArr){
        int length = (int)Math.sqrt(srcArr.length);
        int index =0;
        double[][] resultMatrix = new double[length][length];

        for (int i = 0; i <length;i++)
            for(int j = 0;j<length;j++){
                resultMatrix[i][j] = srcArr[index++];
            }
        return resultMatrix;
    }

    public void setMatrix(double[] matrix) {
        this.matrix = matrix;
    }
    public double[] getMatrix() {
        return matrix;
    }

    public int getMultiplier() {
        return multiplier;
    }

    public double[] getMatrix2() {
        return matrix2;
    }

    public void setMatrix2(double[] matrix2) {
        this.matrix2 = matrix2;
    }

    public void setMultiplier(int multiplier) {
        this.multiplier = multiplier;
    }

    public double[] multiplyMatrix() {
        int length = makeMatrix(matrix).length;
        int length2 = makeMatrix(matrix2)[0].length;
        int length3 = makeMatrix(matrix2).length;
        double [][] res = new double[length][length2];
        double [][] matrix1 = makeMatrix(this.matrix);
        double [][] matrix2 = makeMatrix(this.matrix2);

        for (int i = 0; i < length; i++) {
            for (int j = 0; j < length2; j++) {
                for (int k = 0; k < length3; k++) {
                    res[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            }
        }
        int index =0;

        double [] resMatrix = new double[res.length*res[0].length];
        for (int i =0;i < res.length;i++)
            for (int j =0;j < res[0].length;j++){
                resMatrix[index] = res[i][j];
                index++;
            }

return  resMatrix;
    }
}
