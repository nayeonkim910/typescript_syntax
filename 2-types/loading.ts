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

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(LoadState:ResourceLoadState){
    LoadState.state=='loading'&& console.log('👀 loading...');
    LoadState.state=='success'&& console.log('😃',LoadState.response.body);
    LoadState.state=='fail'&& console.log('😱',LoadState.reason);
    
  }
   printLoginState({ state: 'loading' }); // 👀 loading...
   printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
   printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
