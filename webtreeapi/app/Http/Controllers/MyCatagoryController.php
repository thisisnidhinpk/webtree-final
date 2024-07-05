<?php

namespace App\Http\Controllers;

use App\Models\MyCatagories;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Models\MyUsers;
class MyCatagoryController extends Controller
{
    //
    public function createCatagory(Request $request)
{
     try{
    $validatedData = $request->validate([
        'email' => 'required|email',
        'catagory' => 'required|string|max:255',
        
        

    ]);
    
  
    $user = MyUsers::where('email',  $validatedData['email'])->first();
    $validatedData['customerid']=$user['customerid'];

    // Create a new student with the hashed password
    
        $catagories = MyCatagories::create($validatedData);
       // return response()->json($userreg);
        if($catagories)
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
        // Handle generic exception
        // return response()->json(['errors.generic', ['message' => $e->validator->errors()]], 500);
        return response()->json( $e->validator->errors());
    }
    
  
}
public function loadCatagory(Request $request)
{
     try{
    $validatedData = $request->validate([
        'email' => 'required|email',
        
        
        

    ]);
    
  
    $user = MyUsers::where('email',  $validatedData['email'])->first();
    
    $validatedData['customerid']=$user['customerid'];
    
    // Create a new student with the hashed password
    
        $catagories = MyCatagories::where('customerid',$validatedData['customerid'])->get();
       
       // return response()->json($userreg);
        if($catagories)
           {
             return response()->json( $catagories);
            //return  $catagories;
           }
           else{
               return response()->json([
                   'status'=>500,
                   'Msg'=>'data not found'
               ],500);
             }
    }
    catch (ValidationException $e) {
        // Handle generic exception
        // return response()->json(['errors.generic', ['message' => $e->validator->errors()]], 500);
        return response()->json( $e->validator->errors());
    }
    
    
}

public function updateCatagory(Request $request)
{
     try{
    $validatedData = $request->validate([
        'email' => 'required|email',
        'catagory' => 'required|string',
        'changecatagory' => 'required|string',
        
        
        

    ]);
    
  
    $user = MyUsers::where('email',  $validatedData['email'])->first();
    
    $validatedData['customerid']=$user['customerid'];
    
    // Create a new student with the hashed password
    $catagories = MyCatagories::where('customerid', $validatedData['customerid'])
            ->where('catagory', $validatedData['catagory'])
            ->update(['catagory' => $validatedData['changecatagory']]);
    
      
       
        $catagories = MyCatagories::where('customerid',$validatedData['customerid'])->get();
        // return response()->json($catagories);
        if($catagories)
           {
             return response()->json( $catagories);
            //return  $catagories;
           }
           else{
               return response()->json([
                   'status'=>500,
                   'Msg'=>'data not found'
               ],500);
             }
    }
    catch (ValidationException $e) {
        // Handle generic exception
        // return response()->json(['errors.generic', ['message' => $e->validator->errors()]], 500);
        return response()->json( $e->validator->errors());
    }
    
    
}
}
