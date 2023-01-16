{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  const loading:LoadingState={
    state:'loading',
  };

  const success:SuccessState={
    state: 'success',
    response:{
      body: 'loaded',
    }
  }
  const fail:FailState={
    state:'fail',
    reason: 'no network',
  }

  type ResourceLoadState = LoadingState | SuccessState | FailState;
  function printLoginState(state: ResourceLoadState):void{
   switch(state.state){
      case 'loading':
        console.log(`👀 ${state.state}...`);
        break;
      case 'success':
        console.log(`😃 ${state.response.body} !`);
        break;
      case 'fail':
        console.log(`😅 ${state.reason}..`);
   }
  }
  printLoginState(loading);
  printLoginState(success);
  printLoginState(fail);
}
