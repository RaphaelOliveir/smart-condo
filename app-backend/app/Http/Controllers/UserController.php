<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login()
    {
        return view('login');
    }

    public function auth(Request $request)
    {
        $request->validate([
            'name' => 'required|string', 
            'password' => 'required',
        ],
        [
            'name.required'=> 'Campo nome é obrigatório',
            'password.required'=> 'Campo senha é obrigatório',
        ]);

        if (Auth::attempt(['name' => $request->name, 'password' => $request->password])) {
            return redirect()->route('home');

            // AUTENTICAÇÃO BEM SUCEDIDA ENTÃO É REDIRECIONADO A HOME.
            
        } else {
            return redirect()->back()->withErrors([
                'name' => 'As credenciais fornecidas não correspondem aos nossos registros.',

                // AUTENTICAÇÃO COM ERROS, DEIXEI PARA RODAR ESSA MENSAGEM
            ]);
        }
    }

    public function showRegistrationForm()
    {
        return view('register');
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        $user = $this->create($request->all());

        // REGISTER USER 
        Auth::login($user);

        return redirect()->route('home');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
