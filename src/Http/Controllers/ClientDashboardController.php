<?php

namespace Juzaweb\ClientDashboard\Http\Controllers;

use Juzaweb\CMS\Http\Controllers\BackendController;

class ClientDashboardController extends BackendController
{
    public function index()
    {
        //

        return view(
            'client_dashboard::index',
            [
                'title' => 'Title Page',
            ]
        );
    }
}
