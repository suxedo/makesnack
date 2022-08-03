<Header
style={{display:'flex',  alignItems:'center', width:'100%', flexDirection:'row', justifyContent:'center'}}

>
    <div className={visible && 'headerBackGround'}>
    
    <Button
    style={{marginRight:'32px'}}
          type="text"
          icon={
            <svg
              style={{ width: "24px", height: "24px" }}
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 20 20"
            >
              <path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path>
            </svg>
          }
        />
          <div className="logo">
        <img
          style={{ width: "auto", height: "24px" }}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
      </div>
      {!visible && (
        <>
         <div className="header__switch">
        <div className="header__switchOptions">
          <p
            onClick={() => onChangeSwitch()}
            style={{ fontWeight: "500", fontSize: "14px" }}
          >
            Delivery
          </p>
          <p
            onClick={() => onChangeSwitch()}
            style={{
              fontWeight: "500",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Pickup
          </p>
        </div>

        <div
          onClick={() => onChangeSwitch()}
          className={`header__switchHandle ${
            switchCheck === false ? "false" : ""
          }`}
        >
          <div className="header__switchHandle__inner">
            {switchCheck === false ? "Pickup" : "Delivery"}
          </div>
        </div>
      </div>
        </>
        )}
     
      {!visible && (
        <>
            
      <div className="header__positionBtn">
      <svg width="16px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Deliver to" role="img" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="#000000"></path></svg>
        Nigeria.now
        
      </div>
        </>
      )}
      <div className="hd">
      <div className="header__inputUser">
        <Input
        onClick={() => showDrawer()}
          className="ff"
          bordered={false}
          size="large"
          placeholder="Enter delivery address"
          prefix={
            <svg
              width="24px"
              height="24px"
              style={{ marginRight: "15px" }}
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                fill="currentColor"
              ></path>
            </svg>
          }
        />
      </div>
        
      </div>
   
   
 

    <div className="headerRight">
        {visible && (
            <div onClick={()=> showDrawer() }>
                   <svg style={{width:'16px', height:'16px'}} aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="o6 lc ca cb"><path d="M21.1 5.1l-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9z"></path></svg>

                
            </div>
            
        )}
 
    {!visible && (
        <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            marginRight: "16px",
          }}
          type="default"
          shape="round"
          icon={
            <svg
              style={{
                width: "20px",
                height: "20px",
                marginRight: "4px",
              }}
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 26 26"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"
              ></path>
            </svg>
          }
          size="large"
        >
          Log in
        </Button>

        <Button
          type="default"
          style={{
            color: "#ffffff",
            backgroundColor: "#000000",
            textAlign: "center",
            justifyContent: "center",
            alignItem: "center",
            display: "flex",
          }}
          shape="round"
          size="large"
        >
          <div>Sign up</div>
        </Button>
      </div>

    )}
      
    </div>

  </div>
  <div className={visible? 'searchDropdownShow':'searchDropdown'}>

djfbhdjbfdhfbdjh

</div>
        
  

 
</Header>