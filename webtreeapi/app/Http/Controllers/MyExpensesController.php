<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Models\MyUsers;
use App\Models\MyCatagories;
use App\Models\MyExpenses;
class MyExpensesController extends Controller
{
    //
    public function createExpenses(Request $request)
    {
         try{
        $validatedData = $request->validate([
            'email' => 'required|email',
            'catagory' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'amount' => 'required|integer',
            'dateofexp' => 'required|date',
            
    
        ]);
        
      
        $user = MyUsers::where('email',  $validatedData['email'])->first();
        $validatedData['customerid']=$user['customerid'];
        $catagories = MyCatagories::where('catagory',  $validatedData['catagory'])->where('customerid',  $validatedData['customerid'])->first();
        // Create a new student with the hashed password
        
        $inpdata['catagoryid']=$catagories['catagoryid'];
        $inpdata['customerid']=$validatedData['customerid'];
        $inpdata['description']=$validatedData['description'];
        $inpdata['amount']=$validatedData['amount'];
        $inpdata['dateofexp']=$validatedData['dateofexp'];
       
            $expenses = MyExpenses::create($inpdata);
            
            if($expenses)
               {
                   return response()->json([
                       'status'=>200,
                       'Msg'=>'Data added success'
                   ]);
               }
               else{
                   return response()->json([
                       'status'=>500,
                       'Msg'=>'Insertion failed'
                   ],500);
                 }
        }
        catch (ValidationException $e) {
         
            return response()->json( $e->validator->errors());
        }
        
       
    }
    public function summerizeExpenses(Request $request)
    {
         try{
        $validatedData = $request->validate([
            'email' => 'required|email',
            
            'dateofexpstart' => 'required|date',
            'dateofexpstop' => 'required|date',
            
    
        ]);
        
      
        $user = MyUsers::where('email',  $validatedData['email'])->first();
        $validatedData['customerid']=$user['customerid'];
     
        
      
        $inpdata['customerid']=$validatedData['customerid'];
      
        $inpdata['dateofexp1']=$validatedData['dateofexpstart'];
        $inpdata['dateofexp2']=$validatedData['dateofexpstop'];
      
            $expenses = MyExpenses::whereBetween('dateofexp', [$inpdata['dateofexp1'], $inpdata['dateofexp2']])->where('customerid',$inpdata['customerid'])->get();
            return response()->json($expenses);
            if($expenses)
               {
                   return response()->json([
                       'status'=>200,
                       'Msg'=>'Data added success'
                   ]);
               }
               else{
                   return response()->json([
                       'status'=>500,
                       'Msg'=>'Insertion failed'
                   ],500);
                 }
        }
        catch (ValidationException $e) {
         
            return response()->json( $e->validator->errors());
        }
        
       
    }
}
